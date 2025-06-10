"use client";

import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { loginSchema, LoginSchema } from "@/types/auth/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Hint from "../ui/Hint";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Button } from "../ui/button";
import { loginAction } from "@/actions/loginAction";
import { HttpResponseType } from "@/types/ResponseTypes";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import { AiOutlineLoading } from "react-icons/ai";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const login = async (data: LoginSchema) => {
    setIsLoading(true);
    const response = await loginAction(data);

    if (response.type === HttpResponseType.ERROR) {
      toast.error(response.errorMessage, {
        description: response.errorDescription,
      });
      setIsLoading(false);
    }

    if (response.type === HttpResponseType.SUCCESS) {
      toast.success("Login realizado com sucesso!");
      redirect("/profile");
    }
  };

  return (
    <div className="bg-white border-2 border-input rounded-md py-16 px-12 w-full max-w-[32rem]">
      <h1 className="text-3xl font-bold text-center">Entre na sua conta</h1>
      <form
        onSubmit={handleSubmit(login)}
        className="flex flex-col gap-y-4 mt-12"
      >
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
              {...register("password")}
              placeholder="Digite sua senha"
              autoComplete="current-password"
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
        <Button className="mt-4 py-6" disabled={isLoading}>
          {isLoading ? <AiOutlineLoading className="animate-spin" /> : "Entrar"}
        </Button>
      </form>
    </div>
  );
}
