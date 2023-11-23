import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";

export default async function listGet(req, res) {
  const db = (await connectDB).db("next");
  let list = await db
    .collection("comment")
    .find({ postId: new ObjectId(req.query.postId) })
    .toArray();

  return res.status(200).json(list);
}
