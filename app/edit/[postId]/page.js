import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const db = (await connectDB).db("next");
  let result = await db.collection("post").findOne({
    _id: new ObjectId(`${props.params.postId}`),
  });

  return (
    <div className="flex flex-col items-center w-screen">
      <h4 className="font-bold text-[30px] text-slate-700">글 수정하기</h4>
      <form
        action="/api/edit"
        method="POST"
        className="flex flex-col p-4 gap-2 w-full"
      >
        <input
          name="title"
          className="bg-slate-200 p-2"
          defaultValue={result.title}
        ></input>
        <textarea
          name="content"
          className="bg-slate-200 h-[300px] p-4"
          defaultValue={result.content}
        ></textarea>
        <input name="_id" defaultValue={result._id.toString()} hidden />
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
