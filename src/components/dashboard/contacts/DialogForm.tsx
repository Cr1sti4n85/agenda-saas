"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ContactCreationRequest } from "@/models/contactModel";
import { addNewContact } from "@/server/database/contacts";
import { useState } from "react";
import { toast } from "sonner";

type DialogFormProps = {
  getContacts: () => Promise<void>;
};

export function DialogForm({ getContacts }: DialogFormProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [contactInfo, setContactinfo] = useState<ContactCreationRequest>({
    name: "",
    last_name: "",
    email: "",
    phone: "",
    age: 0,
  });

  const handleSaveContact = async () => {
    setLoading(true);
    try {
      await addNewContact(contactInfo);
      toast.success("Contacto creado correctamente");
      await getContacts();
    } catch {
      toast.error("Error al crear el contacto");
    } finally {
      setLoading(false);
      setShow(false);
      setContactinfo({
        name: "",
        last_name: "",
        email: "",
        phone: "",
        age: 0,
      });
    }
  };

  return (
    <Dialog open={show} onOpenChange={setShow}>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Crear nuevo contacto</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Crear contacto</DialogTitle>
            <DialogDescription>
              Completa los campos con la información de tu nuevo contacto.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Nombre</Label>
              <Input
                id="name-1"
                name="name"
                value={contactInfo?.name}
                onChange={(e) => {
                  setContactinfo({ ...contactInfo, name: e.target.value });
                }}
                placeholder="Elvis"
                type="text"
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="lastName-1">Apellido</Label>
              <Input
                id="lastName-1"
                name="lastName"
                placeholder="Tek"
                value={contactInfo?.last_name}
                onChange={(e) => {
                  setContactinfo({ ...contactInfo, last_name: e.target.value });
                }}
                type="text"
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email-1">Email</Label>
              <Input
                id="email-1"
                name="email"
                placeholder="elvis@example.com"
                value={contactInfo?.email}
                onChange={(e) => {
                  setContactinfo({ ...contactInfo, email: e.target.value });
                }}
                type="email"
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="phone-1">Teléfono</Label>
              <Input
                id="phone-1"
                name="phone"
                placeholder="999-888-777"
                value={contactInfo?.phone}
                onChange={(e) => {
                  setContactinfo({ ...contactInfo, phone: e.target.value });
                }}
                type="tel"
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="age-1">Edad</Label>
              <Input
                id="age-1"
                name="age"
                placeholder="30"
                value={contactInfo?.age}
                onChange={(e) => {
                  setContactinfo({ ...contactInfo, age: +e.target.value });
                }}
                type="tel"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              disabled={loading}
              type="button"
              onClick={handleSaveContact}
            >
              {loading ? "Procesando..." : "Agregar contacto"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
