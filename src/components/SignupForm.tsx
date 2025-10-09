"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { signup } from "@/server/login/actions";
import { cn } from "@/lib/utils";

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    const response = await signup(email, password);
    toast.error("Error al iniciar sesión", {
      description: response.message,
      style: {
        background: "red",
        color: "white",
      },
    });
    setIsLoading(false);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-foreground">
          Correo electrónico
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="tu@email.com"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-11"
        />
      </div>

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
      <div className="space-y-2">
        <Label
          htmlFor="password"
          className="text-sm font-medium text-foreground"
        >
          Confirmar contraseña
        </Label>
        <div className="relative">
          <Input
            id="confirmPassword"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={confirmPassword}
            name="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className={cn(
              "h-11 pr-10",
              // Cambia el color del borde según si coinciden o no
              confirmPassword
                ? confirmPassword === password
                  ? "border-green-500 focus-visible:ring-green-500/40"
                  : "border-red-500 focus-visible:ring-red-500/40"
                : ""
            )}
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

      <Button
        type="submit"
        className="w-full h-11 text-base font-medium"
        disabled={
          (!password && !confirmPassword) || password !== confirmPassword
        }
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          "Registrarse"
        )}
      </Button>
    </form>
  );
}
