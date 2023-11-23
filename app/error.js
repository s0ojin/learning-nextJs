"use client";

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col justify-center items-center text-[40px]">
      <p className="font-bold">잠시 후 다시 시도해주세요.</p>
      <button
        className="p-3 bg-slate-500 rounded-xl text-white"
        onClick={() => {
          reset();
        }}
      >
        새로고침
      </button>
    </div>
  );
}
