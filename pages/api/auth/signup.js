import { connectDB } from "@/utils/database";
import bcrypt from "bcrypt";

export default async function signupPost(req, res) {
  if (req.method === "POST") {
    if (
      req.body.name.trim().length === 0 ||
      req.body.email.trim().length === 0 ||
      req.body.password.trim().length === 0
    ) {
      return res.status(500).json("빈칸은 입력이 불가능합니다.");
    }

    let db = (await connectDB).db("next");
    let existedEmail = await db
      .collection("user_cred")
      .findOne({ email: req.body.email });

    if (existedEmail) {
      return res.status(500).json("이미 존재하는 이메일 입니다.");
    }

    let hash = await bcrypt.hash(req.body.password, 10);
    req.body.password = hash;

    await db.collection("user_cred").insertOne(req.body);
    res.redirect(
      302,
      "/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Fsignup"
    );
  }
}
