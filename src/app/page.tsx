import { signIn, signUp } from "@/server/users";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import SignOutButton from "@/components/SignOutButton";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl">Min heading</h1>
        <button
          onClick={signIn}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Sign In
        </button>
        <button
          onClick={signUp}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Sign Up
        </button>
        <SignOutButton />
        <p>{!session ? "Not authenticated" : `${session.user.name}`}</p>
      </main>
    </div>
  );
}
