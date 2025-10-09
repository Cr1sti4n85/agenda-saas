"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
// import { useRouter } from "next/navigation";
// import { signinAction } from "@/server/auth/auth";
import { login } from "@/server/login/actions";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const router = useRouter();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    // const formData = new FormData();
    // formData.append("email", email);
    // formData.append("password", password);

    //   const response = await fetch("/api/signin", {
    //     method: "POST",
    //     body: JSON.stringify({ email, password }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   const data = await response.json();

    //   if (!data.success) {
    //     setErrorText("Credenciales inválidas");
    //   } else {
    //     setErrorText("");
    //     router.push("/dashboard");
    //   }

    //   setIsLoading(false);

    //SERVER ACTIONS
    // await signinAction(email, password);
    await login(email, password);
    toast.error("Error al iniciar sesión", {
      description: "Credenciales no válidas",
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

      <Button type="submit" className="w-full h-11 text-base font-medium">
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          "Iniciar sesión"
        )}
      </Button>
    </form>
  );
}
