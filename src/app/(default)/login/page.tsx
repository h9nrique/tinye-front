import React from "react";
import Container from "@/components/ui/Container";
import LoginForm from "@/components/login/LoginForm";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Login() {
  const cookieStorage = await cookies();
  const token = cookieStorage.get("token")?.value;

  if (token) return redirect("/profile");

  return (
    <Container className="items-center justify-center">
      <LoginForm />
    </Container>
  );
}
