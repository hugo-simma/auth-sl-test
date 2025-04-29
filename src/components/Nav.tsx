import SignInButton from "@/components/SignInButton";
import SignUpButton from "@/components/SignUpButton";
import SignOutButton from "@/components/SignOutButton";
import { authClient } from "@/lib/auth-client";

export default function Nav() {
  return (
    <nav className="border p-8 flex gap-4">
      <SignInButton />
      <SignUpButton />
      <SignOutButton />
    </nav>
  );
}
