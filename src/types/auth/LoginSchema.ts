import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Insira seu e-mail" })
    .email({ message: "Insira um e-mail válido" }),
  password: z
    .string()
    .min(6, { message: "Sua senha deve conter pelo menos 6 caracteres" }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
