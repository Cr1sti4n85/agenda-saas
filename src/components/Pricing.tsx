import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "0",
    description: "Perfecto para empezar",
    features: [
      "Hasta 50 citas al mes",
      "1 usuario",
      "Calendario básico",
      "Recordatorios por email",
      "Soporte por email",
    ],
    cta: "Comenzar gratis",
    popular: false,
  },
  {
    name: "Profesional",
    price: "29",
    description: "Para profesionales en crecimiento",
    features: [
      "Citas ilimitadas",
      "Hasta 3 usuarios",
      "Reservas online",
      "Recordatorios SMS y email",
      "Reportes avanzados",
      "Integraciones",
      "Soporte prioritario",
    ],
    cta: "Prueba 14 días gratis",
    popular: true,
  },
  {
    name: "Empresarial",
    price: "79",
    description: "Para equipos y empresas",
    features: [
      "Todo en Profesional",
      "Usuarios ilimitados",
      "Múltiples ubicaciones",
      "API personalizada",
      "Marca blanca",
      "Gestor de cuenta dedicado",
      "Soporte 24/7",
    ],
    cta: "Contactar ventas",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section
      id="planes"
      className="py-20 md:py-32 bg-secondary/30 px-4 md:px-6"
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Planes diseñados para cada etapa de tu negocio
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Comienza gratis y escala cuando lo necesites. Sin permanencia,
            cancela cuando quieras.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular
                  ? "border-primary shadow-lg scale-105"
                  : "border-border/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full">
                    Más popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
