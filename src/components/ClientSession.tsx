"use client";

import { authClient } from "@/lib/auth-client";

export default function ClientSession() {
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <h1 className="text-4xl">Client Session</h1>
      <p>{!session ? "Not authenticated" : `${session.user.name}`}</p>
      <p>{isPending ? "pending" : ""}</p>
      <p>{error ? "error" : ""}</p>
    </main>
  );
}
