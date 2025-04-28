import { signUp } from "@/server/users";

export default function SignUpButton() {
  return (
    <button
      onClick={signUp}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Sign Up
    </button>
  );
}
