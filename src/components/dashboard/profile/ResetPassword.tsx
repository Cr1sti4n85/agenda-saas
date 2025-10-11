"use client";
import { Button } from "@/components/ui/button";
import { requestResetPassword } from "@/server/updates/actions";
import React from "react";
import { toast } from "sonner";

const ResetPassword = () => {
  const handleResetPassword = async () => {
    const host = window.location.origin;
    const result = await requestResetPassword(host);
    if (result) {
      toast.success(
        "Un correo ha sido enviado para realizar el proceso de actualización"
      );
    } else {
      toast.error("No se pudo enviar el correo");
    }
  };
  return (
    <div>
      <Button onClick={handleResetPassword}>Actualizar contraseña</Button>
    </div>
  );
};

export default ResetPassword;
