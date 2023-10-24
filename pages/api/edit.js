import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";

export default async function editPost(req, res) {
  if (req.method === "POST") {
    const db = (await connectDB).db("next");

    let result = await db.collection("post").updateOne(
      {
        _id: new ObjectId(req.body._id),
      },
      { $set: { title: req.body.title, content: req.body.content } }
    );
    res.redirect(302, `/detail/${req.body._id}`);
  }
}
