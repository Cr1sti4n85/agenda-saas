import { RequestResetPasswordForm } from "@/components/RequestResetPassword";
import { Phone } from "lucide-react";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-background">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary">
              <Phone className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-semibold text-foreground">
              Recuperar contraseña
            </span>
          </div>
          <RequestResetPasswordForm />
        </div>
      </div>
    </div>
  );
};

export default page;
