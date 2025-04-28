"use client";

import { signIn } from "@/server/users";

export default function SignInButton() {
  return (
    <button
      onClick={() => signIn("test@gmail.com", "password123")}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Sign In
    </button>
  );
}
