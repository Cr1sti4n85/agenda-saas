"use client";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ContactModel } from "@/models/contactModel";
import { getAllContacts, updateContact } from "@/server/database/contacts";
import { useCallback, useEffect, useState } from "react";
import { DialogForm } from "./DialogForm";
import { Star, Trash2 } from "lucide-react";
import { toast } from "sonner";
import DeleteContactDialog from "./DeleteContact";

type ContactTableProps = {
  id: string;
};

const ContactTable = ({ id }: ContactTableProps) => {
  const [contacts, setContacts] = useState<ContactModel[]>([]);
  const [loading, setLoading] = useState(true);

  const getContacts = useCallback(async () => {
    const contacts: ContactModel[] = await getAllContacts(id);
    setContacts(contacts);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getContacts();
  }, [getContacts]);

  const handleChangeFavorite = async (id: number, isFavorite: boolean) => {
    try {
      await updateContact(id, isFavorite);
      toast.success("Contacto actualizado correctamente");
      await getContacts();
    } catch {
      toast.error("Error al actualizar el contacto");
    }
  };
  return (
    <div>
      <Table>
        <TableCaption></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Apellido</TableHead>
            <TableHead>Teléfono</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Favorito</TableHead>
            <TableHead className="text-center">Eliminar</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.map((contact, index) => (
            <TableRow key={index}>
              <TableCell>{contact.name}</TableCell>
              <TableCell>{contact.last_name}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell className="text-center">
                {contact.is_favorite ? (
                  <Star
                    onClick={() => handleChangeFavorite(contact.id, false)}
                    className="text-yellow-500 cursor-pointer"
                  />
                ) : (
                  <Star
                    onClick={() => handleChangeFavorite(contact.id, true)}
                    className="text-gray-400 cursor-pointer"
                  />
                )}
              </TableCell>
              <TableCell className="flex items-center justify-center">
                <DeleteContactDialog
                  id={contact.id}
                  name={contact.name}
                  getcontacts={getContacts}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {loading && (
        <div className="w-full">
          <Skeleton className="w-full h-10" />
          <Skeleton className="w-full h-10 mt-2" />
          <Skeleton className="w-full h-10 mt-2" />
        </div>
      )}
      <DialogForm getContacts={getContacts} />
    </div>
  );
};

export default ContactTable;
