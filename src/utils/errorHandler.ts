import { ErrorResponse } from "@/types/ResponseTypes";
import { redirect } from "next/navigation";

export const errorHandler = async (error: ErrorResponse) => {
  if (error.httpStatusCode === 401) {
    return redirect("/logout");
  }

  return error;
};
