import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createShortLinkAction } from "@/actions/createShortLinkAction";
import { HttpResponseType } from "@/types/ResponseTypes";
import { LinkType } from "@/types/links/LinkType";
import { toast } from "sonner";
import Link from "next/link";
import { AiOutlineLoading } from "react-icons/ai";
import Hint from "../ui/Hint";

export const createShortLinkSchema = z.object({
  originalLink: z.string().regex(/\.[a-zA-Z]{2,}(\/|$)?/, {
    message: "Link inválido. Verifique se o link está no formato correto.",
  }),
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
    formState: { isSubmitting, errors },
  } = useForm<CreateShortLinkSchema>({
    resolver: zodResolver(createShortLinkSchema),
  });

  const createShortLink = async (data: CreateShortLinkSchema) => {
    const response = await createShortLinkAction(data);

    if (response.type === HttpResponseType.ERROR) {
      toast.error(response.errorMessage, {
        description: response.errorDescription,
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
    <div className="w-full flex flex-col items-center mb-8 font-normal">
      <form onSubmit={handleSubmit(createShortLink)} className="w-full mb-2">
        <div className="flex flex-col md:flex-row gap-2 justify-center items-center mb-1">
          <Input
            placeholder="Cole seu link para encurtar"
            className="p-6 max-h-12"
            {...register("originalLink")}
          />
          <Button className="p-6 px-8 w-full md:w-36" disabled={isSubmitting}>
            {isSubmitting ? (
              <AiOutlineLoading className="animate-spin" />
            ) : (
              "Encurtar Link"
            )}
          </Button>
        </div>

        {errors.originalLink && <Hint>{errors.originalLink.message}</Hint>}
      </form>
      <p className="text-center text-gray-400">
        <Link
          href="/login"
          className="hover:border-gray-400 border-b border-transparent duration-200 transition-all font-medium"
        >
          Acesse sua conta
        </Link>{" "}
        para visualizar estatísticas e gerenciar melhor seus links
      </p>
    </div>
  );
}
