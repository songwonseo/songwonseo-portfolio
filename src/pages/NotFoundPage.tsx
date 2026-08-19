import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
export function NotFoundPage() {
  return (
    <main className="not-found">
      <span>404</span>
      <h1>페이지를 찾을 수 없습니다.</h1>
      <p>주소가 변경되었거나 존재하지 않는 페이지입니다.</p>
      <Link className="button button--primary" to="/">
        <ArrowLeft /> 홈으로 돌아가기
      </Link>
    </main>
  );
}
