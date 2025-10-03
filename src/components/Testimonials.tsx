import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import Person1 from "@/assets/person1.jpg";
import Person2 from "@/assets/person2.jpg";
import Person3 from "@/assets/person3.jpg";
import test from "node:test";

const testimonials = [
  {
    name: "Laura Martínez",
    role: "Fisioterapeuta",
    content:
      "AgendaPro ha transformado completamente mi práctica. Ahora puedo gestionar todas mis citas desde mi móvil y mis pacientes adoran poder reservar online.",
    rating: 5,
    avatar: Person1,
  },
  {
    name: "Carlos Rodríguez",
    role: "Peluquero",
    content:
      "La mejor inversión para mi salón. Los recordatorios automáticos han reducido las ausencias en un 80%. Increíble.",
    rating: 5,
    avatar: Person2,
  },
  {
    name: "Isabel Fernández",
    role: "Psicóloga",
    content:
      "Fácil de usar y muy completo. El soporte técnico es excelente y siempre están disponibles para ayudar. Lo recomiendo totalmente.",
    rating: 5,
    avatar: Person3,
  },
];

export function TestimonialsSection() {
  return (
    <section id="opiniones" className="py-20 md:py-32 px-4 md:px-6">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Profesionales que confían en nosotros
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Miles de profesionales ya están optimizando su tiempo con AgendaPro.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {testimonial.content}
                </p>

                <div className="flex items-center gap-3 pt-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
