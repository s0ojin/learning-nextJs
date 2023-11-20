"use client";

import { signIn } from "next-auth/react";

export default function LoginBtn() {
  return (
    <button
      className="bg-slate-400 p-2 rounded-lg text-white"
      onClick={() => signIn()}
    >
      로그인
    </button>
  );
}
