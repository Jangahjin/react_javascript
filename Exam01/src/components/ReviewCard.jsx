// React 라이브러리와 상태 관리 훅인 useState를 불러옵니다.
import React, { useState } from "react";
// 개별 리뷰 카드 전용 스타일 시트를 불러옵니다.
import "./ReviewCard.css";

// 개별 리뷰 아이템을 렌더링하고 수정/삭제 기능을 제공하는 ReviewCard 컴포넌트를 정의하고 내보냅니다.
export default function ReviewCard({ review, onDelete, onUpdate }) {
  // 수정 모드인지 여부를 관리하는 상태 변수입니다.
  const [isEditing, setIsEditing] = useState(false);
  // 수정 중인 코멘트 내용을 관리하는 상태 변수입니다.
  const [newComment, setNewComment] = useState(review.comment);

  // 수정 완료 버튼을 눌렀을 때 실행되는 함수입니다.
  const handleUpdateSubmit = () => {
    if (!newComment.trim()) {
      alert("수정할 내용을 입력해주세요!");
      return;
    }
    onUpdate(review.id, newComment);
    setIsEditing(false);
  };

  return (
    <div style={{ padding: '15px', backgroundColor: '#F9F9F9', borderRadius: '12px', border: '1px solid #D2E4F0', marginBottom: '12px' }}>
      {/* 가게 이름과 작성 날짜를 양 끝으로 정렬하여 출력합니다. */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <span style={{ fontWeight: 'bold', fontSize: '15px', color: '#2A1B18' }}>{review.storeName}</span>
        {/* 📅 리뷰가 작성된 날짜를 출력합니다. */}
        <span style={{ fontSize: '12px', color: '#777' }}>{review.date}</span>
      </div>

      <div style={{ fontSize: '13px', color: '#555', marginBottom: '6px' }}>
        평점: {'⭐'.repeat(review.rating)} | 추천 메뉴: {review.menu || '없음'}
      </div>

      {isEditing ? (
        <div style={{ marginTop: '8px' }}>
          <textarea 
            value={newComment} 
            onChange={(e) => setNewComment(e.target.value)} 
            style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #D2E4F0', height: '60px', boxSizing: 'border-box', marginBottom: '8px', outline: 'none' }}
          />
          <div style={{ display: 'flex', gap: '6px', justifyContent: 'flex-end' }}>
            <button 
              onClick={handleUpdateSubmit}
              style={{ padding: '6px 12px', backgroundColor: '#2A1B18', color: '#D2E4F0', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '12px' }}
            >
              저장
            </button>
            <button 
              onClick={() => setIsEditing(false)}
              style={{ padding: '6px 12px', backgroundColor: '#ddd', color: '#333', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '12px' }}
            >
              취소
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p style={{ fontSize: '14px', color: '#2A1B18', margin: '8px 0', lineHeight: '1.4' }}>{review.comment}</p>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
            <button 
              onClick={() => setIsEditing(true)}
              style={{ background: 'none', border: 'none', color: '#2A1B18', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}
            >
              수정
            </button>
            <button 
              onClick={() => onDelete(review.id)}
              style={{ background: 'none', border: 'none', color: '#ff5c8a', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}
            >
              삭제
            </button>
          </div>
        </div>
      )}
    </div>
  );
}