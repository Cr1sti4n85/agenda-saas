import { LoginForm } from "@/components/LoginForm";
import { Phone } from "lucide-react";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function LoginPage() {
  const cookiesHanlder = await cookies();

  const isLoggedIn = cookiesHanlder.get("isLoggedIn");

  if (isLoggedIn) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-background">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary">
              <Phone className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-semibold text-foreground">
              ContactHub
            </span>
          </div>

          <h1 className="text-3xl font-bold text-foreground mb-2 text-balance">
            Bienvenido de vuelta
          </h1>
          <p className="text-muted-foreground">
            Accede a tu agenda telefónica en línea
          </p>
        </div>

        <LoginForm />

        <p className="text-center text-sm text-muted-foreground mt-6">
          ¿No tienes una cuenta?{" "}
          <a href="#" className="text-foreground font-medium hover:underline">
            Regístrate gratis
          </a>
        </p>
      </div>
    </div>
  );
}
