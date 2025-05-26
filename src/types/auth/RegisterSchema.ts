import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1, { message: "Insira seu nome" }),
  email: z
    .string()
    .min(1, { message: "Insira seu e-mail" })
    .email({ message: "Insira um e-mail válido" }),
  password: z
    .string()
    .min(6, { message: "Sua senha deve conter pelo menos 6 caracteres" })
    .regex(/[A-z]/, { message: "Sua senha deve ter pelo menos uma letra" })
    .regex(/[0-9]/, { message: "Sua senha deve ter pelo menos um número" })
    .regex(/[^A-Za-z0-9]/, {
      message: "Sua senha deve ter pelo menos um caractere especial",
    }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
