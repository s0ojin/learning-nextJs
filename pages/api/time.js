//유저에게 현재 날짜, 현재 시간을 보내주는 서버기능

export default function Time(req, res) {
  const now = new Date();

  return res.status(200).json(now);
}
