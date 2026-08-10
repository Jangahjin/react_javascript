import React from 'react';
import './ReviewCard.css';

export default function ReviewCard({ review, onDelete, onUpdate }) {
  // 🛡️ 방어 코드: review 데이터가 없을 때 앱이 멈추는 것을 방지합니다.
  if (!review) return null;

  // 🗑️ 리뷰 삭제 전 확인 창을 띄우는 함수
  const handleDeleteClick = () => {
    const isConfirmed = window.confirm(`"${review.storeName || '해당'}" 리뷰를 정말 삭제하시겠습니까?`);
    if (isConfirmed && review.id) {
      onDelete(review.id); // 확인을 누르면 삭제 진행
    }
  };

  return (
    <div className="review-card">
      <div className="review-header">
        <h4>{review.storeName || '가게 이름 없음'}</h4>
        <span>⭐ {review.rating || 0}점</span>
      </div>
      <p>추천 메뉴: {review.menu || '정보 없음'}</p>
      <p>{review.comment || '작성된 내용이 없습니다.'}</p>
      <div className="review-actions">
        {/* 수정 버튼 등... */}
        <button className="delete-btn" onClick={handleDeleteClick}>삭제</button>
      </div>
    </div>
  );
}