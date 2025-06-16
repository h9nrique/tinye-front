"use server";

import { api } from "@/libs/axios";
import { LinkType } from "@/types/links/LinkType";
import {
  ErrorResponse,
  responseError,
  responseSuccess,
} from "@/types/ResponseTypes";
import { AxiosError } from "axios";

export async function handleRedirectAction(id: string) {
  try {
    const response = await api.get(`/link/${id}`);
    return responseSuccess<LinkType>(response);
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    return responseError(axiosError);
  }
}
