"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function SignUpButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async () => {
    // In a real app, get these values from a form
    const email = "user@example.com";
    const password = "password123";
    const name = "User Name";

    try {
      setIsLoading(true);
      const { data, error } = await authClient.signUp.email(
        {
          email,
          password,
          name,
          callbackURL: "/dashboard",
        },
        {
          onRequest: () => {
            // Already handled with the isLoading state
          },
          onSuccess: () => {
            // Redirect or show success message
          },
          onError: (ctx) => {
            alert(ctx.error.message);
          },
        }
      );
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleSignUp}
      disabled={isLoading}
      className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
    >
      {isLoading ? "Signing up..." : "Sign Up"}
    </button>
  );
}
