import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";

export default async function Detail(props) {
  const db = (await connectDB).db("next");
  let result = await db.collection("post").findOne({
    _id: new ObjectId(`${props.params.postId}`),
  });

  return (
    <div>
      <h4 className="text-[24px] font-bold">{result.title}</h4>
      <p className="my-10">{result.content}</p>
      <Comment postId={props.params.postId} />
    </div>
  );
}
