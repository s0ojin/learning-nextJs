import { connectDB } from "@/utils/database";
import Link from "next/link";
import ListItem from "./ListItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export const dynamic = "force-dynamic";

export default async function List() {
  const db = (await connectDB).db("next");
  let result = await db.collection("post").find().toArray();
  result = result.map((item) => {
    item._id = item._id.toString();
    return item;
  });

  let session = await getServerSession(authOptions);

  return (
    <div className="p-3 dark:bg-slate-800">
      <Link href={"write"}>
        <div className="h-[60px] flex justify-center items-center font-bold rounded-md mb-[50px] bg-slate-400 hover:bg-slate-500 text-white">
          새로운 글 작성하기
        </div>
      </Link>
      <ListItem result={result} author={session?.user.email} />
    </div>
  );
}
