"use client";
import { Button } from "@/components/ui/button";
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
import { getAllContacts } from "@/server/database/contacts";
import { useEffect, useState } from "react";
import { DialogForm } from "./DialogForm";

type ContactTableProps = {
  id: string;
};

const ContactTable = ({ id }: ContactTableProps) => {
  //   const contacts: ContactModel[] = await getAllContacts();
  const [contacts, setContacts] = useState<ContactModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getContacts() {
      const contacts: ContactModel[] = await getAllContacts(id);
      setContacts(contacts);
      setLoading(false);
    }
    getContacts();
  }, [id]);

  return (
    <div>
      <Table>
        <TableCaption></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Apellido</TableHead>
            <TableHead>Teléfono</TableHead>
            <TableHead className="text-right">Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.map((contact, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{contact.id}</TableCell>
              <TableCell>{contact.name}</TableCell>
              <TableCell>{contact.last_name}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell className="text-right">{contact.email}</TableCell>
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
      <DialogForm />
    </div>
  );
};

export default ContactTable;
