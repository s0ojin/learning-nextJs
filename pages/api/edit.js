import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";

export default async function editPost(req, res) {
  if (req.method === "POST") {
    const db = (await connectDB).db("next");
    let post = await db
      .collection("post")
      .findOne({ _id: new ObjectId(req.body) });

    let session = await getServerSession(authOptions);

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
