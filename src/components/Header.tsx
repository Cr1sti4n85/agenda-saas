import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Calendar className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">AgendaPro</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#servicios"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Servicios
          </Link>
          <Link
            href="#caracteristicas"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Características
          </Link>
          <Link
            href="#planes"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Planes
          </Link>
          <Link
            href="#opiniones"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Opiniones
          </Link>
          <Link
            href="#contacto"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contacto
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Iniciar sesión
          </Button>
          <Button size="sm">Prueba gratis</Button>
        </div>
      </div>
    </header>
  );
}
