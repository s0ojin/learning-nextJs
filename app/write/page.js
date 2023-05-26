//post 요청하는 방법 form method post로 보내기

export default function Write() {
  return (
    <div>
      <h4>글작성</h4>
      <form action="/api/test" method="post">
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
