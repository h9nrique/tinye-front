import React from "react";
import RegisterForm from "@/components/register/RegisterForm";
import Container from "@/components/ui/Container";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Register() {
  const cookieStorage = await cookies();
  const token = cookieStorage.get("token")?.value;

  if (token) return redirect("/account");

  return (
    <Container className="items-center justify-center">
      <RegisterForm />
    </Container>
  );
}
