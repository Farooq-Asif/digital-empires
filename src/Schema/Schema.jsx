import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(50, "Name is too long"),
  email: z.string().email(" Email address is required"),
  message: z.string().min(1, "Message cannot be empty"),
  country: z.string().optional(),
  companyUrl: z
  .string()
  .url("Invalid URL format")
  .refine(
    (value) => value !== "https://" && value.length > 8,
    "Please provide a valid URL"
  ),
  country:z.string().min(1, "Name is required"),
  user_type: z.string().min(1, "Please select an option"),
  topic: z.string().min(1, "Please select a topic"),
});
