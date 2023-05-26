export default function Home() {
  return (
    <div>
      <form action="/api/time" method="get" className="flex justify-center">
        <button
          type="submit"
          className="bg-slate-500 text-white p-5 rounded-[10px]"
        >
          현재 시간을 알려드림미당
        </button>
      </form>
    </div>
  );
}
