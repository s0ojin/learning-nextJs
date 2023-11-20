"use client";

import { signOut } from "next-auth/react";

export default function LogoutBtn() {
  return (
    <button
      className="bg-slate-400 p-2 rounded-lg text-white"
      onClick={() => signOut()}
    >
      로그아웃
    </button>
  );
}
