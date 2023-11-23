import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";
import { notFound } from "next/navigation";

export default async function Detail(props) {
  const db = (await connectDB).db("next");
  let result = await db.collection("post").findOne({
    _id: new ObjectId(`${props.params.postId}`),
  });

  if (result === null) {
    return notFound();
  }

  return (
    <div>
      <h4 className="text-[24px] font-bold">{result.title}</h4>
      <p className="my-10">{result.content}</p>
      <Comment postId={props.params.postId} />
    </div>
  );
}
