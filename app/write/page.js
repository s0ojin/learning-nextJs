//post 요청하는 방법 form method post로 보내기

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Write() {
  let session = await getServerSession(authOptions);

  if (!session) {
    console.log("로그인 후 이용할 수 있습니다.");
    redirect(
      "/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Fsignup"
    );
  }

  return (
    <div className="flex flex-col items-center w-screen">
      <h4 className="font-bold text-[30px] text-slate-700">글작성</h4>
      <form
        action="/api/create"
        method="POST"
        className="flex flex-col p-4 gap-2 w-full"
      >
        <input
          name="title"
          placeholder="제목을 입력하세요"
          className="bg-slate-200 p-2"
        ></input>
        <textarea
          name="content"
          placeholder="내용을 입력하세요"
          className="bg-slate-200 h-[300px] p-4"
        ></textarea>
        <button
          type="submit"
          className="bg-slate-500 text-white h-[3rem] rounded-[10px]"
        >
          버튼
        </button>
      </form>
    </div>
  );
}
