import { connectDB } from "@/utils/database";
import Link from "next/link";
import DetailRouter from "./DetailRouter";

export default async function List() {
  const db = (await connectDB).db("next");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="p-3 bg-slate-200">
      <Link href={"write"}>
        <div className="h-[60px] flex justify-center items-center font-bold rounded-md mb-[50px] bg-slate-400 hover:bg-slate-500 text-white">
          새로운 글 작성하기
        </div>
      </Link>
      {result.map((item) => {
        return (
          <>
            <div className="bg-white rounded-[10px] p-[20px] mb-[5px] shadow-[0x_2px_4px_0px_rgb(224,224,224)] flex justify-between">
              <Link href={`detail/${item._id}`} key={item._id}>
                <h4 className="text-[20px] font-bold m-0">{item.title}</h4>
                <p className="text-grey mx-[5px]">{item.content}</p>
              </Link>
              <div className="bg-slate-200 text-center rounded-md p-2 leading-10">
                <Link href={`edit/${item._id}`}>✏️수정하기</Link>
              </div>
            </div>
            {/*             <DetailRouter postId={item._id} /> */}
          </>
        );
      })}
    </div>
  );
}
