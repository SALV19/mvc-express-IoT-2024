import { z } from "zod";

export const courseSchema = z.object({
  course_name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  credits: z.number(),
  description: z
    .string()
    .min(10, { message: "El curso requiere de una descripción" }),
  teacher_id: z.number(),
});
