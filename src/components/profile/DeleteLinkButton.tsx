"use client";

import React, { useState } from "react";
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
import { AiOutlineLoading } from "react-icons/ai";

type DeleteLinkButtonProps = {
  id: string;
  setLinkList: React.Dispatch<React.SetStateAction<LinkType[]>>;
};

export default function DeleteLinkButton({
  id,
  setLinkList,
}: DeleteLinkButtonProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const deleteLink = async () => {
    setIsLoading(true);
    const response = await deleteLinkAction({ id });
    await new Promise((resolve) => setTimeout(resolve, 3000));
    if (response.type === HttpResponseType.ERROR) {
      errorHandler(response);
      return toast.error("Não foi possível deletar o link", {
        description: "Tente novamente mais tarde",
      });
      setIsLoading(false);
    }

    if (response.type === HttpResponseType.SUCCESS) {
      setLinkList((prevLinks) => {
        return prevLinks.filter((link) => link.id !== id);
      });
      toast.success("Link deletado com sucesso");
      setIsLoading(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" disabled={isLoading}>
          {isLoading ? (
            <AiOutlineLoading className="animate-spin" />
          ) : (
            <FaTrash />
          )}
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
