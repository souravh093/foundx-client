import { z } from "zod";

export const loginValidationSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Please enter valid email")
    .trim(),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, "Password needs to be at least 6 character ")
    .max(99),
});

export const registerValidationSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Please enter valid email")
    .trim(),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, "Password needs to be at least 6 character ")
    .max(99),
  name: z.string({ required_error: "Name is Required" }),
  mobileNumber: z.string({ required_error: "Mobile number is required" }),
});
