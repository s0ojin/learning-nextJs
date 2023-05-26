//get 요청하는 법
//app/api/어쩌고.js
//pages/api/어쩌고.js

export default function handler(req, res) {
  console.log(123);
  return res.status(200).json("처리완료");
}
