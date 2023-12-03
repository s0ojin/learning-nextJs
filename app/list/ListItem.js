"use client";

import Link from "next/link";

export default function ListItem({ result, author }) {
  return (
    <div>
      {result.map((item) => (
        <div
          key={item._id}
          className="bg-slate-200 rounded-[10px] p-[20px] mb-[5px] shadow-[0x_2px_4px_0px_rgb(224,224,224)] flex justify-between"
        >
          <div className="flex-1">
            <Link href={`detail/${item._id}`}>
              <h4 className="text-[20px] font-bold m-0">{item.title}</h4>
              <p className="text-grey mx-[5px]">{item.content}</p>
            </Link>
          </div>
          {author === item.author && (
            <div className="flex gap-2">
              <div className="bg-slate-300 hover:bg-slate-400 text-center rounded-md p-2 leading-10">
                <Link href={`edit/${item._id}`}>✏️수정하기</Link>
              </div>
              <div
                onClick={(e) => {
                  fetch(`/api/delete/${item._id}`, {
                    method: "DELETE",
                  })
                    .then((res) => {
                      if (res.status === 200 || res.status === 500) {
                        return res.json();
                      }
                    })
                    .then((res) => alert(res))
                    .then(() => {
                      e.target.parentElement.parentElement.parentElement.style.display =
                        "none";
                    });
                }}
                className="bg-slate-300 hover:bg-slate-400 text-center rounded-md p-2 leading-10"
              >
                <Link href={"list"}>🗑삭제하기</Link>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
