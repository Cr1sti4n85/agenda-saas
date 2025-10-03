import { Calendar, Clock, Bell, Users, BarChart, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Calendar,
    title: "Gestión de citas",
    description:
      "Programa y organiza todas tus citas en un calendario intuitivo y fácil de usar.",
  },
  {
    icon: Clock,
    title: "Recordatorios automáticos",
    description:
      "Envía recordatorios por email y SMS para reducir las ausencias de clientes.",
  },
  {
    icon: Users,
    title: "Base de datos de clientes",
    description:
      "Mantén toda la información de tus clientes organizada y accesible.",
  },
  {
    icon: Bell,
    title: "Notificaciones en tiempo real",
    description:
      "Recibe alertas instantáneas de nuevas reservas y cambios en tu agenda.",
  },
  {
    icon: BarChart,
    title: "Reportes y estadísticas",
    description:
      "Analiza el rendimiento de tu negocio con informes detallados.",
  },
  {
    icon: Shield,
    title: "Seguridad garantizada",
    description:
      "Tus datos y los de tus clientes protegidos con encriptación de nivel empresarial.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="py-20 md:py-32 bg-secondary/30 px-4 md:px-6"
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Todo lo que necesitas para gestionar tu negocio
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Herramientas profesionales diseñadas para simplificar tu día a día y
            hacer crecer tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-primary/50 transition-colors"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
