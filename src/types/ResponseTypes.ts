import { AxiosError, AxiosResponse } from "axios";

export const HttpResponseType = {
  ERROR: "error",
  SUCCESS: "success",
} as const;

export type ErrorResponse = {
  type: string;
  status: string;
  data: string;
};

export function responseSuccess<T>(response: AxiosResponse<T>) {
  return { type: "success", status: response.status, data: response.data };
}

export function responseError<T>(error: AxiosError<T>) {
  return {
    type: "error",
    status: error.response?.status ?? 500,
    data: error.response?.data ?? "Erro desconhecido",
  };
}
