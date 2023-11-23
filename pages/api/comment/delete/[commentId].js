import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";

export default async function deleteComment(req, res) {
  let session = await getServerSession(req, res, authOptions);

  if (req.method === "DELETE") {
    const db = (await connectDB).db("next");

    let comment = await db
      .collection("comment")
      .findOne({ _id: new ObjectId(req.query.commentId) });

    if (session.user.email === comment.author) {
      let result = await db
        .collection("comment")
        .deleteOne({ _id: new ObjectId(req.query.commentId) });
      return res.status(200).json("삭제가 완료되었습니다.");
    } else {
      res.status(401).json("작성자와 유저가 일치하지 않습니다.");
    }

    if (result.deletedCount === 0) {
      return res.status(500).json("삭제에 실패했습니다.");
    }
  }
}
