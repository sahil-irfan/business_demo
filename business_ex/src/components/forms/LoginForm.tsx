"use client";

import { signIn } from "next-auth/react";

const LoginForm = () => {
  return (
    <div className="space-y-4 rounded-2xl border bg-white p-6 shadow-sm">
      <button
        onClick={() => signIn("google",{callbackUrl: "/",})}
        className="w-full rounded-lg bg-red-500 px-4 py-3 font-medium text-white"
      >
        Continue with Google
      </button>
    </div>
  );
};

export default LoginForm;