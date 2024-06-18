import { z } from "zod";

export const registerUserSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email(),
  password: z.string().min(6, "Password must be atleast 6 characters long"),
});

export const loginUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Password must be atleast 6 characters long"),
});
