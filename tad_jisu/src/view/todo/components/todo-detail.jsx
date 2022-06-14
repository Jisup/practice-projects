import { useLocation, useParams } from "react-router-dom";

export default function TodoDetail() {
  let params = useParams();
  let location = useLocation();
  console.log(params, location);
  return (
    <div className="todo-detail-components">
      <div>여기는 {params.id}번 방입니다</div>
    </div>
  );
}
