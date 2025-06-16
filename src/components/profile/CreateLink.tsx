"use client";

import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast } from "sonner";
import {
  createShortLinkSchema,
  CreateShortLinkSchema,
} from "../HomePage/CreateLinkInput";
import { createShortLinkAction } from "@/actions/createShortLinkAction";
import { HttpResponseType } from "@/types/ResponseTypes";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LinkType } from "@/types/links/LinkType";

export default function CreateLink({
  setOrderedLinksList,
}: {
  setOrderedLinksList: React.Dispatch<React.SetStateAction<LinkType[]>>;
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
      toast.error(response.errorMessage, {
        description: response.errorDescription,
      });
    }

    if (response.type === HttpResponseType.SUCCESS) {
      const newLink = response.data as LinkType;
      reset();
      toast.success("Link criado com sucesso");
      return setOrderedLinksList((prevLinks) => [...prevLinks, newLink]);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(createShortLink)}
      className="flex flex-col md:flex-row w-full gap-2 justify-center items-center mb-8 md:mb-4"
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
