import React from 'react'
import Review from '../../Review'

const MyReviewsView = () => {
  return (
    <div>
      <h2>MyReviews</h2>
      {/* 라디오를 체크해서 복수 삭제 가능 */}
      <button>삭제</button>
      <ul>
        <li>
          <div>review image</div>
          <div>
            <h5>리뷰 이름 </h5>
            <h6>작품 이름</h6>
            <p>내용 미리보기</p>
          </div>
          <div>
            <button>수정</button>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default MyReviewsView