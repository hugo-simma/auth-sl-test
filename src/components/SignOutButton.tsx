"use client";

import { authClient } from "@/lib/auth-client";

export default function SignOutButton() {
  return (
    <button
      className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-red-600 transition-colors duration-200"
      onClick={async () => {
        authClient.signOut();
      }}
    >
      Sign Out
    </button>
  );
}
