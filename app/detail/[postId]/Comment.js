"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Comment({ postId }) {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    fetch(`/api/comment/list?postId=${postId}`)
      .then((res) => res.json())
      .then((data) => setCommentList(data));
  }, []);

  return (
    <div>
      <p className="text-[18px] font-medium mb-2">댓글목록</p>
      <input
        name="content"
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        className="p-2 border-2 border-slate-500 rounded-lg"
      />
      <button
        onClick={(e) => {
          setComment("");
          fetch("/api/comment/create", {
            method: "POST",
            body: JSON.stringify({
              content: comment,
              postId: postId,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              setCommentList(data);
            });
        }}
        className="bg-slate-500 rounded-lg p-2 ml-2 text-white"
      >
        댓글전송
      </button>
      <div className="flex flex-col gap-2 mt-6">
        <div className="h-[1px] bg-slate-200" />
        {commentList.map((comment) => (
          <>
            <div className="flex justify-between items-center">
              <div key={comment._id} className="p-2">
                <p className="font-medium mb-1">{comment.author}</p>
                <p>{comment.content}</p>
              </div>
              <div
                className="p-5 cursor-pointer"
                onClick={(e) => {
                  fetch(`/api/comment/delete/${comment._id}`, {
                    method: "DELETE",
                  })
                    .then((res) => {
                      if (res.status === 200 || res.status === 500) {
                        return res.json();
                      }
                    })
                    .then((res) => alert(res))
                    .then(() => {
                      e.target.parentElement.parentElement.style.display =
                        "none";
                    });
                }}
              >
                <Link href={`detail/${postId}`}>❌</Link>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
