"use client";

import { useRouter } from "next/navigation";

export default function DetailRouter({ postId }) {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push(`detail/${postId}`);
      }}
      className="bg-black text-white"
    >
      useRouter로 이동하기
    </button>
  );
}
