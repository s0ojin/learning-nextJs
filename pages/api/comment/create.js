import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";

export default async function createComment(req, res) {
  let session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(500).json("로그인 후 댓글을 작성할 수 있습니다.");
  }

  req.body = JSON.parse(req.body);

  const comment = {
    content: req.body.content,
    postId: new ObjectId(req.body.postId),
    author: session.user.email,
  };

  if (req.method === "POST") {
    if (req.body.content === "") {
      return res.status(500).json("내용을 입력하세요");
    }

    const db = (await connectDB).db("next");
    await db.collection("comment").insertOne(comment);

    let list = await db
      .collection("comment")
      .find({ postId: new ObjectId(req.body.postId) })
      .toArray();

    res.status(200).json(list);
  }
}
