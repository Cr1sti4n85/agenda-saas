"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { updatePassword } from "@/server/updates/actions";
import { createClient } from "@/utils/supabase/client";

export function ResetPasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    if (password.length < 8) {
      toast.error("Error", {
        description: "La contraseña debe tener al menos 8 caracteres",
        style: {
          background: "red",
          color: "white",
        },
      });
      setIsLoading(false);
      return;
    }

    const supabase = createClient();
    await supabase.auth.updateUser({
      password,
    });

    toast.success("Contraseña modificada correctamente");
    setIsLoading(false);
    setShowLogin(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label
          htmlFor="password"
          className="text-sm font-medium text-foreground"
        >
          Contraseña
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="h-11 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      <Button type="submit" className="w-full h-11 text-base font-medium">
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          "Actualizar contraseña"
        )}
      </Button>

      {showLogin && <Link href="/login">Inicia sesión</Link>}
    </form>
  );
}
