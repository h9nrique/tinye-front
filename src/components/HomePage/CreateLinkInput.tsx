import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createShortLinkAction } from "@/actions/createShortLinkAction";
import { ErrorResponse, HttpResponseType } from "@/types/ResponseTypes";
import { LinkType } from "@/types/links/LinkType";
import { toast } from "sonner";

const createShortLinkSchema = z.object({
  originalLink: z.string().url("URL inválida"),
});

export type CreateShortLinkSchema = z.infer<typeof createShortLinkSchema>;

export default function CreateLinkInput({
  addLink,
}: {
  addLink: (links: LinkType) => void;
}) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<CreateShortLinkSchema>({
    resolver: zodResolver(createShortLinkSchema),
  });

  const createShortLink = async (data: CreateShortLinkSchema) => {
    const response = await createShortLinkAction(data);

    if (response.type === HttpResponseType.ERROR) {
      const responseData = response.data as ErrorResponse;
      toast.error("Erro ao encurtar seu link", {
        description: responseData.data,
      });
    }

    if (response.type === HttpResponseType.SUCCESS) {
      const responseData = response.data as LinkType;
      addLink(responseData);
      reset();
      toast.success("Link criado com sucesso");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(createShortLink)}
      className="flex flex-col md:flex-row w-full gap-2 justify-center items-center mb-4"
    >
      <Input
        placeholder="Cole seu link para encurtar"
        className="p-6 max-h-12"
        {...register("originalLink")}
      />
      <Button className="p-6 px-8 w-full md:w-auto" disabled={isSubmitting}>
        Encurtar Link
      </Button>
    </form>
  );
}
