import { z } from "zod";

export const registerSchema = z.object({
    email: z.string().email("Введите корректный email"),
    password: z.string().min(6, "Пароль должен быть минимум 6 символов"),
    password1: z.string().min(6, "Подтвердите пароль"),
    }).refine((data) => data.password === data.password1, {
    message: "Пароли не совпадают",
    path: ["password1"],
});

export type RegisterSchemaType = z.infer<typeof registerSchema>;