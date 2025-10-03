import { Check } from "lucide-react";
import Calendar from "@/assets/calendar-agenda.jpg";
import Image from "next/image";

const features = [
  "Calendario sincronizado en todos tus dispositivos",
  "Reservas online 24/7 para tus clientes",
  "Integración con Google Calendar y Outlook",
  "Pagos online seguros y automatizados",
  "Gestión de múltiples profesionales y servicios",
  "Personalización completa de tu marca",
  "Aplicación móvil para iOS y Android",
  "Soporte técnico prioritario en español",
];

export function FeaturesSection() {
  return (
    <section id="caracteristicas" className="py-20 md:py-32 px-4 md:px-6">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">
              Características que impulsan tu productividad
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              AgendaPro está diseñado para profesionales que buscan optimizar su
              tiempo y ofrecer la mejor experiencia a sus clientes.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8">
              <div className="h-full w-full rounded-xl bg-card shadow-2xl flex items-center justify-center">
                <Image
                  src={Calendar}
                  alt="Dashboard de AgendaPro"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
