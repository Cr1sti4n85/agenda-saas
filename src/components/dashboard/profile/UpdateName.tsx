"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const UpdateName = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <h2>Actualizar nombre</h2>
      <Input
        onChange={(e) => setName(e.target.value)}
        type="text"
        value={name}
        placeholder="Ingresa tu nombre"
      />
    </div>
  );
};

export default UpdateName;
