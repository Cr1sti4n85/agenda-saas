import Link from "next/link";
import { Calendar } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-12 md:py-16 px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Calendar className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">AgendaPro</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              La solución completa para gestionar tu agenda digital y hacer
              crecer tu negocio.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Producto</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#servicios"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#caracteristicas"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Características
                </Link>
              </li>
              <li>
                <Link
                  href="#planes"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Precios
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Términos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>© 2025 AgendaPro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
