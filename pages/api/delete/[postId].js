import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";

export default async function deletePost(req, res) {
  if (req.method === "DELETE") {
    const db = (await connectDB).db("next");
    let result = await db
      .collection("post")
      .deleteOne({ _id: new ObjectId(req.query.postId) });

    if (result.deletedCount === 0) {
      return res.status(500).json("삭제에 실패했습니다.");
    }

    res.status(200).json("삭제가 완료되었습니다.");
  }
}
