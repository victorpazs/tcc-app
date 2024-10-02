import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Esse campo deve ser preenchido!" })
    .email("E-mail inválido."),
});
