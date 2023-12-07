import { connectDB } from "@/utils/database";
import { revalidatePath } from "next/cache";

export default async function Write2() {
  const db = (await connectDB).db("next");
  let result = await db.collection("post_test").find().toArray();

  async function handleSubmit(formData) {
    "use server";
    const db = (await connectDB).db("next");
    await db
      .collection("post_test")
      .insertOne({ title: formData.get("title") });
    revalidatePath("/write2");
  }
  return (
    <div>
      <form action={handleSubmit}>
        <input name="title"></input>
        <button type="submit">버튼</button>
      </form>
      {result ? result.map((a) => <p key={a._id}>글제목: {a.title}</p>) : null}
    </div>
  );
}
