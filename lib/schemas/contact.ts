import { z } from "zod";

export const contactSchema = z.object({
  Name: z.string().min(2, "Name is required"),
  Company: z.string().optional(),
  "E-mail": z.string().email("Invalid email address"),
  Phone: z.string().optional(),
  Message: z.string().min(5, "Message is too short"),
});

export type ContactForm = z.infer<typeof contactSchema>;
