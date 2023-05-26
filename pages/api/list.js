import { connectDB } from "@/utils/database";

export default async function getList(req, res) {
  const db = (await connectDB).db("next");
  let list = await db.collection("post").find().toArray();
  return res.status(200).json(list);
}
