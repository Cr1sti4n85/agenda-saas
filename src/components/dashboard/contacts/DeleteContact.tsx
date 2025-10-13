import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteContactById } from "@/server/database/contacts";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

type DeleteDialogProps = {
  id: number;
  name: string;
  getcontacts: () => Promise<void>;
};

const DeleteContactDialog = ({ id, name, getcontacts }: DeleteDialogProps) => {
  const handleDeleteContact = async () => {
    try {
      await deleteContactById(id);
      await getcontacts();
      toast.success("Contacto eliminado correctamente");
    } catch {
      toast.error("Error al eliminar el contacto");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Trash2 className="cursor-pointer" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            ¿Seguro que quieres eliminar a {name} de tus contactos?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción borrará de manera permanente los datos seleccionados.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteContact}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteContactDialog;
