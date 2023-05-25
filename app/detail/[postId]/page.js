import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
  const db = (await connectDB).db("next");
  let result = await db.collection("post").findOne({
    _id: new ObjectId(`${props.params.postId}`),
  });

  return (
    <div>
      <h1>상세페이지</h1>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  );
}
