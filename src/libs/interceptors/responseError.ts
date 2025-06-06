import { AxiosError } from "axios";

export const responseError = (error: AxiosError) => {
  return Promise.reject(error);
};
