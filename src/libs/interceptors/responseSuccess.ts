"use server";

import { AxiosResponse } from "axios";

export const responseSuccess = async (response: AxiosResponse) => {
  return response;
};
