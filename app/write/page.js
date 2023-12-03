"use client";

import Image from "next/image";
import { useState } from "react";

export default async function Write() {
  const [preview, setPreview] = useState("");
  return (
    <div className="flex flex-col items-center w-full">
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
        />
        <textarea
          name="content"
          placeholder="내용을 입력하세요"
          className="bg-slate-200 h-[300px] p-4"
        />
        <input
          type="file"
          name="file"
          accept="image/*"
          onChange={async (e) => {
            let file = e.target.files[0];
            let filename = encodeURIComponent(file.name);
            let res = await fetch(`/api/image?file=${filename}`);
            res = await res.json();
            //S3 업로드
            const formData = new FormData();
            Object.entries({ ...res.fields, file }).forEach(([key, value]) => {
              formData.append(key, value);
            });
            let result = await fetch(res.url, {
              method: "POST",
              body: formData,
            });

            if (result.ok) {
              setPreview(result.url + "/" + filename);
            } else {
              console.log("실패");
            }
          }}
        />
        <input hidden name="imageURL" defaultValue={preview} />
        <Image src={preview} alt="미리보기" width="500" height="500" />
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
