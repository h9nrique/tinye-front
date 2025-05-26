import React from "react";
import Container from "@/components/ui/Container";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LoginForm from "@/components/login/LoginForm";

export default async function Login() {
  const cookieStorage = await cookies();
  const token = cookieStorage.get("token")?.value;

  if (token) return redirect("/account");

  return (
    <Container className="items-center justify-center">
      <LoginForm />
    </Container>
  );
}
