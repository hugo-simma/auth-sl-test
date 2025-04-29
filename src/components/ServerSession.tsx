import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function ServerSession() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl">Server Session</h1>
      <p>{!session ? "Not authenticated" : `${session.user.name}`}</p>
    </div>
  );
}
