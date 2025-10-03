import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 px-4 md:px-6">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Nuevo: Sincronización en tiempo real
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
              Gestiona tu agenda digital de forma{" "}
              <span className="text-primary">inteligente</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              La plataforma completa para organizar citas, gestionar clientes y
              optimizar tu tiempo. Todo en un solo lugar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base">
                Comenzar gratis
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base bg-transparent"
              >
                Ver demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  +10,000 usuarios
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Ahorra 5h/semana
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 backdrop-blur">
              <div className="bg-card rounded-xl shadow-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Próximas citas</h3>
                  <Calendar className="h-5 w-5 text-primary" />
                </div>

                <div className="space-y-3">
                  {[
                    {
                      time: "09:00",
                      client: "María García",
                      service: "Consulta",
                    },
                    {
                      time: "11:30",
                      client: "Juan Pérez",
                      service: "Revisión",
                    },
                    {
                      time: "14:00",
                      client: "Ana López",
                      service: "Tratamiento",
                    },
                  ].map((appointment, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50"
                    >
                      <div className="flex-shrink-0 w-16 text-center">
                        <div className="text-sm font-semibold">
                          {appointment.time}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">
                          {appointment.client}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {appointment.service}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
