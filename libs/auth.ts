"use server";
import * as yup from "yup";
import { email, password } from "../utils/constants";
import { createSession, deleteSession } from "./session";
import { redirect } from "next/navigation";

const schema = yup.object({
  email: yup
    .string()
    .email("Enter the valid Email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password should be of 6 characters")
    .required("Password Required"),
});

export const login = async (_: any, formData: FormData) => {
  const payload = Object.fromEntries(formData);
  try {
    await schema.validate(payload, { abortEarly: false });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return {
        isValid: false,
        errors: error.inner.reduce<Record<string, string>>((acc, err) => {
          if (err.path) acc[err.path] = err.message;
          return acc;
        }, {}),
      };
    } else {
      return {
        isValid: false,
        errors: { general: "Unexpected error occurred" },
      };
    }
  }
  if (payload.email !== email || payload.password !== password) {
    return {
      isValid: false,
      errors: { password: "Email or password is incorrect" },
    };
  }
  await createSession(payload.email);
  redirect("/dashboard");
};

export const logout = async () => {
  await deleteSession();
  redirect("/login");
};
