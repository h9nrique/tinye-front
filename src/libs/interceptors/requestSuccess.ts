"use server";
import { InternalAxiosRequestConfig } from "axios";
import { cookies } from "next/headers";

export const requestSuccess = async (request: InternalAxiosRequestConfig) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (token && request.withCredentials !== false) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
};
