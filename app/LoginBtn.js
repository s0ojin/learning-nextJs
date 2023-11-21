"use client";

import { signIn } from "next-auth/react";

export default function LoginBtn() {
  return (
    <button
      className="bg-slate-400 p-2 rounded-lg text-white"
      onClick={() =>
        signIn("signin", {
          redirect: false,
          callbackUrl: "http://localhost:3000/list",
        })
      }
    >
      로그인
    </button>
  );
}
