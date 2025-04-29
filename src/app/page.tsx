import Link from "next/link";
import ClientSession from "@/components/ClientSession";
import ServerSession from "@/components/ServerSession";
import { Server } from "http";

export default async function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl">Welcome</h1>
        <ClientSession />
        <ServerSession />
        <Link className="border p-4 " href={"/dashboard"}>
          Go to dashboard
        </Link>
      </main>
    </div>
  );
}
