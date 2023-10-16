import { useLocation } from "react-router-dom";
import MyReviewsView from "./view";

const MyReviews = () => {
  const location = useLocation();
  console.log("상태값", location.state);

  // id가 없으면 메인으로 이동 (protected route)
  // 유저 정보 아이디로 리뷰들을 조회함
  // READ, UPDATE, DELETE 하는 패치함수
  return <MyReviewsView />;
};

export default MyReviews;
