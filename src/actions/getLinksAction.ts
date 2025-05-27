"use server";

import { api } from "@/libs/axios";
import { LinkType } from "@/types/links/LinkType";
import {
  ErrorResponse,
  responseError,
  responseSuccess,
} from "@/types/ResponseTypes";
import { AxiosError } from "axios";

export async function getLinksAction() {
  try {
    const response = await api.get("/link/links", { withCredentials: true });
    return responseSuccess<LinkType[]>(response);
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    return responseError(axiosError);
  }
}
