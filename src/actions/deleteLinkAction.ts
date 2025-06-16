"use server";

import { api } from "@/libs/axios";
import {
  ErrorResponse,
  responseError,
  responseSuccess,
} from "@/types/ResponseTypes";
import { AxiosError } from "axios";

export async function deleteLinkAction({ id }: { id: string }) {
  try {
    const response = await api.delete(`/link/${id}`, {
      withCredentials: true,
    });
    return responseSuccess<null>(response);
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    return responseError(axiosError);
  }
}
