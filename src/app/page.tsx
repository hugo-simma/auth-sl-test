import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import SignOutButton from "@/components/SignOutButton";
import Link from "next/link";
import SignInButton from "@/components/SignInButton";
import SignUpButton from "@/components/SignUpButton";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl">Welcome</h1>
        <div className="border p-8 flex gap-4">
          <SignInButton />
          <SignUpButton />
          <SignOutButton />
        </div>
        <Link className="border p-4 " href={"/dashboard"}>
          Go to dashboard
        </Link>
        <p>{!session ? "Not authenticated" : `${session.user.name}`}</p>
      </main>
    </div>
  );
}
