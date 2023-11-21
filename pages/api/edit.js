import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function editPost(req, res) {
  if (req.method === "POST") {
    const db = (await connectDB).db("next");
    let post = await db
      .collection("post")
      .findOne({ _id: new ObjectId(req.body._id) });

    let session = await getServerSession(req, res, authOptions);

    if (post.author === session.user.email) {
      let result = await db.collection("post").updateOne(
        {
          _id: new ObjectId(req.body._id),
        },
        {
          $set: {
            title: req.body.title,
            content: req.body.content,
            author: session.user.email,
          },
        }
      );
      res.redirect(302, `/detail/${req.body._id}`);
    }
  }
}
