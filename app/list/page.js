import { connectDB } from "@/utils/database";

export default async function List() {
  const db = (await connectDB).db("next");
  let result = await db.collection("post").find().toArray();

  return (
    <>
      {result.map((item) => {
        return (
          <div key={item._id} className="p-2 bg-slate-200">
            <div className="bg-white rounded-[10px] p-[20px] mb-[5px] shadow-[0x_2px_4px_0px_rgb(224,224,224)]">
              <h4 className="text-[20px] font-bold m-0">{item.title}</h4>
              <p className="text-grey mx-[5px]">{item.content}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
