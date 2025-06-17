"use server";

import { CreateShortLinkSchema } from "@/components/HomePage/CreateLinkInput";
import { api } from "@/libs/axios";
import { LinkType } from "@/types/links/LinkType";
import {
  ErrorResponse,
  responseError,
  responseSuccess,
} from "@/types/ResponseTypes";
import { ensureValidUrl } from "@/utils/ensureValidUrl";
import { AxiosError } from "axios";

export async function createShortLinkAction(data: CreateShortLinkSchema) {
  const validURL: CreateShortLinkSchema = {
    originalLink: ensureValidUrl(data.originalLink),
  };

  try {
    const response = await api.post("/link", validURL);
    return responseSuccess<LinkType>(response);
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    return responseError(axiosError);
  }
}
