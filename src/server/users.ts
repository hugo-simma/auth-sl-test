"use server";

import { auth } from "@/lib/auth";

export const signIn = async (email: string, password: string) => {
  await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  });
};

export const signUp = async () => {
  await auth.api.signUpEmail({
    body: {
      email: "test_2@gmail.com",
      password: "password123",
      name: "Kaffe Kaffsson",
    },
  });
};
