"use client";

import { authClient } from "@/lib/auth-client";

export default function SignInButton() {
  const handleSignIn = async () => {
    const email = "test@gmail.com";
    const password = "password123";
    const name = "Hugo Hugsson";
    const { data, error } = await authClient.signIn.email(
      {
        /**
         * The user email
         */
        email,
        /**
         * The user password
         */
        password,
        /**
         * A URL to redirect to after the user verifies their email (optional)
         */
        callbackURL: "/dashboard",
        /**
         * remember the user session after the browser is closed.
         * @default true
         */
        rememberMe: false,
      },
      {
        //callbacks
      }
    );
  };
  return (
    <button
      onClick={handleSignIn}
      className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition-colors duration-200"
    >
      Sign In
    </button>
  );
}
