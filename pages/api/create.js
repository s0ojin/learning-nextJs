//get 요청하는 법
//app/api/어쩌고.js
//pages/api/어쩌고.js

import { connectDB } from "@/utils/database";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function createPost(req, res) {
  let session = await getServerSession(req, res, authOptions);

  if (session) {
    req.body.author = session.user.email;
  }

  if (req.method === "POST") {
    if (req.body.title === "") {
      return res.status(500).json("제목을 입력하세요");
    }
    if (req.body.content === "") {
      return res.status(500).json("내용을 입력하세요");
    }

    const db = (await connectDB).db("next");
    let article = await db.collection("post").insertOne(req.body);
    res.redirect(302, "/list");
  }
}
