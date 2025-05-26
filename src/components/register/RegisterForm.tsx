"use client";

import React, { useState } from "react";
import PasswordValidation from "@/components/register/PasswordValidation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { registerSchema, RegisterSchema } from "@/types/auth/RegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Hint from "../ui/Hint";
import { createNewAccountAction } from "@/actions/createNewAccountAction";
import { HttpResponseType } from "@/types/ResponseTypes";
import { toast } from "sonner";
import { redirect } from "next/navigation";

export default function RegisterForm() {
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const { onChange: hookFormOnChange, ...inputProps } = register("password");

  const createNewAccount = async (data: RegisterSchema) => {
    const response = await createNewAccountAction(data);

    if (response.type === HttpResponseType.ERROR) {
      toast.error(response.errorMessage, {
        description: response.errorDescription,
      });
    }

    if (response.type === HttpResponseType.SUCCESS) {
      toast.success("Conta criada com sucesso!");
      redirect("/account");
    }
  };

  return (
    <div className="bg-white border-2 border-input rounded-md py-16 px-12 w-full max-w-[32rem]">
      <h1 className="text-3xl font-bold text-center">Crie sua conta</h1>
      <form
        onSubmit={handleSubmit(createNewAccount)}
        className="flex flex-col gap-y-4 mt-12"
      >
        <div>
          <Label htmlFor="name">Nome</Label>
          <Input
            {...register("name")}
            autoComplete="name"
            placeholder="Digite seu nome"
          />
          <Hint>{errors.name && errors.name.message}</Hint>
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            {...register("email")}
            autoComplete="email"
            placeholder="Digite seu email"
          />
          <Hint>{errors.email && errors.email.message}</Hint>
        </div>
        <div>
          <Label htmlFor="password">Senha</Label>
          <div className="relative">
            <Input
              {...inputProps}
              onChange={(e) => {
                setPassword(e.target.value);
                hookFormOnChange(e);
              }}
              placeholder="Digite sua senha"
              autoComplete="new-password"
              type={showPassword ? "text" : "password"}
              className="pr-10"
            />
            <button
              type="button"
              className="absolute right-0 top-1/2 -translate-y-1/2 mr-4 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
          </div>

          <Hint>{errors.password && errors.password.message}</Hint>
        </div>
        <PasswordValidation password={password} />
        <Button className="mt-4 py-6">Criar conta</Button>
      </form>
    </div>
  );
}
