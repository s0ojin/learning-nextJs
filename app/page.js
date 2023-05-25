import { connectDB } from "@/utils/database";

export default async function Home() {
  const db = (await connectDB).db("next");
  let result = await db.collection("post").find().toArray();

  return (
    <div>
      <p>Hi</p>
      <p>{result.title}</p>
      <p>{result.content}</p>
    </div>
  );
}
