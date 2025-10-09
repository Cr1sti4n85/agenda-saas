import { UserPlus, Phone, Users } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MainNav } from "@/components/dashboard/MainNav";
import { SearchNav } from "@/components/dashboard/SearchNav";
import { UserNav } from "@/components/dashboard/UserNav";
import { Overview } from "@/components/dashboard/Overview";
import { RecentContacts } from "@/components/dashboard/RecentContacts";

export default async function DashboardPage() {
  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex max-w-7xl mx-auto h-16 items-center px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <SearchNav />
            <UserNav email={"email@email.com"} />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total de Contactos
              </CardTitle>
              <UserPlus className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">
                +20% desde el último mes
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Llamadas Registradas
              </CardTitle>
              <Phone className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">567</div>
              <p className="text-xs text-muted-foreground">
                +5% desde la semana pasada
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Grupos Activos
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <p className="text-xs text-muted-foreground">
                +2 nuevos grupos este mes
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Resumen</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview />
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Contactos Recientes</CardTitle>
              <CardDescription>
                Has agregado 5 contactos esta semana.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RecentContacts />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
