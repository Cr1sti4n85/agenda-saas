"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { updateName } from "@/server/updates/actions";
import { useState } from "react";
import { toast } from "sonner";

type UpdateNameProps = {
  displayName: string;
};

const UpdateName = ({ displayName }: UpdateNameProps) => {
  const [name, setName] = useState(displayName);

  const handleUpdateName = async () => {
    await updateName(name);
    toast.success("Nombre actualizado");
    setName("");
  };
  return (
    <div>
      <h2>Actualizar nombre</h2>
      <Input
        onChange={(e) => setName(e.target.value)}
        type="text"
        value={name}
        placeholder="Ingresa tu nombre"
      />
      <Button className="mt-5" onClick={handleUpdateName}>
        Actualizar
      </Button>
    </div>
  );
};

export default UpdateName;
