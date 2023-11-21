export default function SignUp() {
  return (
    <div className="">
      <form
        className="flex flex-col gap-4 p-10"
        method="POST"
        action="/api/auth/signup"
      >
        <div>
          <label className="pl-1" htmlFor="name">
            이름
          </label>
          <input
            className="w-full p-2 outline-1 outline-slate-500 border-slate-300 border-2 rounded-lg"
            id="name"
            name="name"
            type="text"
            placeholder="이름"
          />
        </div>
        <div>
          <label className="pl-1" htmlFor="email">
            이메일
          </label>
          <input
            className="w-full p-2 outline-1 outline-slate-500 border-slate-300 border-2 rounded-lg"
            id="emain"
            name="email"
            type="text"
            placeholder="이메일"
          />
        </div>
        <div>
          <label className="pl-1" htmlFor="password">
            비밀번호
          </label>
          <input
            className="w-full p-2 outline-1 outline-slate-500 border-slate-300 border-2 rounded-lg"
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호"
          />
        </div>
        <button
          className="bg-slate-400 text-white rounded-lg p-3 mt-10"
          type="submit"
        >
          가입하기
        </button>
      </form>
    </div>
  );
}
