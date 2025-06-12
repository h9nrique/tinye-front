"use client";

import React from "react";
import { Button } from "../ui/button";
import { FaTrash } from "react-icons/fa6";
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
import { deleteLinkAction } from "@/actions/deleteLinkAction";
import { HttpResponseType } from "@/types/ResponseTypes";
import { toast } from "sonner";
import { LinkType } from "@/types/links/LinkType";
import { errorHandler } from "@/utils/errorHandler";

type DeleteLinkButtonProps = {
  id: string;
  setOrderedLinksList: React.Dispatch<React.SetStateAction<LinkType[]>>;
};

export default function DeleteLinkButton({
  id,
  setOrderedLinksList,
}: DeleteLinkButtonProps) {
  const deleteLink = async () => {
    const response = await deleteLinkAction({ id });

    if (response.type === HttpResponseType.ERROR) {
      errorHandler(response);
      return toast.error("Não foi possível deletar o link", {
        description: "Tente novamente mais tarde",
      });
    }

    if (response.type === HttpResponseType.SUCCESS) {
      setOrderedLinksList((prevLinks) => {
        return prevLinks.filter((link) => link.id !== id);
      });
      toast.success("Link deletado com sucesso");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <FaTrash />
          <p className="md:hidden block">Deletar</p>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white gap-6">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Tem certeza que deseja excluir este link?
          </AlertDialogTitle>
          <AlertDialogDescription>
            <span className="font-bold">Essa ação é permanente.</span> Ao
            excluir este link, você perderá o acesso a ele e às suas
            estatísticas. Se preferir, você pode apenas desativá-lo
            temporariamente.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-white">Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={deleteLink}
            className="bg-red-600 hover:bg-red-500"
          >
            Deletar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
