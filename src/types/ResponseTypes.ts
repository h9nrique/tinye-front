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
    type: HttpResponseType.SUCCESS,
    status: response.status,
    data: response.data,
  };
}

export function responseError(error: AxiosError) {
  const data = error.response?.data as ErrorResponse;

  return {
    type: HttpResponseType.ERROR,
    httpStatusCode: data?.httpStatusCode ?? 500,
    httpStatus: data?.httpStatus ?? "Internal Server Error",
    errorMessage: data?.errorMessage ?? "Erro inesperado",
    errorDescription: data?.errorDescription ?? "Tente novamente mais tarde",
  };
}
