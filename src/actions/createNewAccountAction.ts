"use server";

import { api } from "@/libs/axios";
import { LoginResponse } from "@/types/auth/LoginResponse";
import { RegisterSchema } from "@/types/auth/RegisterSchema";
import {
  ErrorResponse,
  responseError,
  responseSuccess,
} from "@/types/ResponseTypes";
import { AxiosError } from "axios";
import { cookies } from "next/headers";

export async function createNewAccountAction(data: RegisterSchema) {
  try {
    const response = await api.post("/auth/register", data);
    const cookieStore = await cookies();
    cookieStore.set("token", response.data.token, {
      secure: true,
      httpOnly: true,
      sameSite: "strict",
      priority: "high",
      maxAge: 60 * 60 * 24,
    });
    return responseSuccess<LoginResponse>(response);
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    return responseError(axiosError);
  }
}
