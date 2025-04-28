"use client";

import { authClient } from "@/lib/auth-client";

export default function SignOutButton() {
  return (
    <button
      className="bg-red-500 text-white px-4 py-2 rounded"
      onClick={async () => {
        authClient.signOut();
      }}
    >
      Sign Out
    </button>
  );
}
