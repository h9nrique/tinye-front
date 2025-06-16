import { AxiosError, AxiosResponse } from "axios";

export const HttpResponseType = {
  ERROR: "error",
  SUCCESS: "success",
} as const;

export type ErrorResponse = {
  type: typeof HttpResponseType.ERROR;
  httpStatusCode: number;
  httpStatus: string;
  errorMessage: string;
  errorDescription: string;
};

export function responseSuccess<T>(response: AxiosResponse<T>) {
  return {
    type: HttpResponseType?.SUCCESS,
    status: response?.status ?? 0,
    data: response?.data,
  };
}

export function responseError(error: AxiosError) {
  const data = error.response?.data as ErrorResponse;

  return {
    type: HttpResponseType.ERROR,
    httpStatusCode: data?.httpStatusCode ?? error.status ?? 500,
    httpStatus: data?.httpStatus ?? error.cause ?? "Erro desconhecido",
    errorMessage: data?.errorMessage ?? error.message ?? "Erro inesperado",
    errorDescription: data?.errorDescription ?? "Tente novamente mais tarde",
  };
}
