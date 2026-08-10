// React 라이브러리와 상태 관리(useState) 훅을 불러옵니다.
import React, { useState } from "react";
// 개별 리뷰 아이템을 렌더링하는 ReviewCard 컴포넌트를 불러옵니다.
import ReviewCard from "../components/ReviewCard";
// 프로필 카드 컴포넌트를 불러옵니다.
import ProfileCard from "../components/ProfileCard";

// 사용자 마이페이지 화면을 담당하는 Mypage 컴포넌트를 정의하고 내보냅니다. (상태 제어 함수 및 데이터 props를 받습니다.)
export default function Mypage({ setCurrentView, recentStores, reviews, deleteReview, updateReview, addReview }) {
  // 리뷰 작성 폼의 열림/닫힘 상태를 관리하는 상태 변수입니다.
  const [isOpenForm, setIsOpenForm] = useState(false);
  // 작성 중인 가게 이름을 관리하는 상태 변수입니다.
  const [storeName, setStoreName] = useState("");
  // 작성 중인 별점(평점)을 관리하는 상태 변수입니다 (기본값 "5").
  const [rating, setRating] = useState("5");
  // 작성 중인 추천 메뉴를 관리하는 상태 변수입니다.
  const [menu, setMenu] = useState("");
  // 작성 중인 리뷰 내용을 관리하는 상태 변수입니다.
  const [comment, setComment] = useState("");

  // 새로운 리뷰 등록 폼이 제출될 때 실행되는 이벤트 핸들러 함수입니다.
  const handleSubmit = (e) => {
    // 폼 제출 시 페이지가 새로고침되는 기본 동작을 막습니다.
    e.preventDefault();
    // 가게 이름이나 내용이 비어있는지 검사하고, 비어있다면 경고창을 띄우고 중단합니다.
    if (!storeName.trim() || !comment.trim()) {
      alert("가게 이름과 내용을 입력해주세요!");
      return;
    }

    // 입력된 값들로 구성된 새로운 리뷰 객체를 생성합니다.
    const newReview = {
      id: Date.now(),
      storeName,
      rating: Number(rating),
      menu,
      comment,
      date: new Date().toISOString().split("T")[0],
    };

    // 부모 컴포넌트로부터 받은 addReview 함수를 호출하여 리뷰를 추가합니다.
    addReview(newReview);
    
    // 리뷰 등록 후 입력 폼의 상태 필드들을 초기화합니다.
    setStoreName("");
    setRating("5");
    setMenu("");
    setComment("");
    // 작성 폼을 닫아줍니다.
    setIsOpenForm(false);
  };

  return (
    // 마이페이지 전체 화면을 감싸는 컨테이너 영역입니다.
    <div style={{ padding: '20px', backgroundColor: '#FFFFFF', minHeight: '100vh', fontFamily: 'Pretendard, sans-serif' }}>
      
      {/* 🔙 상단 헤더 영역이며, 이전 화면(홈)으로 돌아가는 뒤로 가기 버튼을 포함합니다. */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
        {/* 클릭 시 현재 뷰 상태를 'home'으로 변경하여 홈 화면으로 이동시키는 버튼입니다. */}
        <button 
          onClick={() => setCurrentView('home')} 
          style={{
            background: 'none',
            border: 'none',
            fontSize: '18px',
            cursor: 'pointer',
            color: '#2A1B18',
            fontWeight: 'bold',
            marginRight: '10px',
            padding: '4px 8px'
          }}
        >
          ←
        </button>
        {/* 마이페이지 화면 제목을 출력합니다. */}
        <h2 style={{ fontSize: '17px', fontWeight: '700', color: '#2A1B18', margin: 0 }}>
          사용자 마이페이지
        </h2>
      </div>

      {/* 👤 프로필 카드 컴포넌트를 최상단(뒤로가기 헤더 바로 아래)에 배치합니다. */}
      <div style={{ marginBottom: '16px' }}>
        <ProfileCard 
          recentCount={recentStores.length} 
          reviewCount={reviews.length} 
        />
      </div>

      {/* 새 글 작성 폼의 토글을 제어하는 버튼 영역입니다. */}
      <div style={{ margin: '10px 0 20px 0' }}>
        {/* 클릭 시 isOpenForm 상태를 반전시켜 폼의 열림/닫힘을 전환합니다. */}
        <button 
          onClick={() => setIsOpenForm(!isOpenForm)}
          style={{
            width: '100%',
            padding: '12px',
            background: '#2A1B18',
            color: '#D2E4F0',
            border: 'none',
            borderRadius: '10px',
            fontWeight: 'bold',
            fontSize: '15px',
            cursor: 'pointer'
          }}
        >
          {isOpenForm ? '닫기' : '✏️ 새 글(리뷰) 작성하기'}
        </button>
      </div>

      {/* isOpenForm이 true일 때만 화면에 노출되는 리뷰 작성 입력 폼입니다. */}
      {isOpenForm && (
        <form onSubmit={handleSubmit} style={{ background: '#F9F9F9', padding: '15px', borderRadius: '12px', marginBottom: '20px', border: '1px solid #D2E4F0' }}>
          {/* 작성 폼 내부 소제목을 출력합니다. */}
          <h3 style={{ fontSize: '15px', marginBottom: '10px', color: '#2A1B18' }}>새로운 리뷰 등록</h3>
          <div style={{ marginBottom: '10px' }}>
            {/* 가게 이름을 입력받는 텍스트 입력 필드입니다. */}
            <input 
              type="text" 
              placeholder="가게 이름" 
              value={storeName} 
              onChange={(e) => setStoreName(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #D2E4F0', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}>
            {/* 평점을 선택할 수 있는 드롭다운 셀렉트 박스입니다. */}
            <select 
              value={rating} 
              onChange={(e) => setRating(e.target.value)}
              style={{ padding: '8px', borderRadius: '6px', border: '1px solid #D2E4F0' }}
            >
              <option value="5">⭐⭐⭐⭐⭐ (5점)</option>
              <option value="4">⭐⭐⭐⭐ (4점)</option>
              <option value="3">⭐⭐⭐ (3점)</option>
              <option value="2">⭐⭐ (2점)</option>
              <option value="1">⭐ (1점)</option>
            </select>
            {/* 추천 메뉴를 입력받는 텍스트 입력 필드입니다. */}
            <input 
              type="text" 
              placeholder="추천 메뉴 (예: 소금빵)" 
              value={menu} 
              onChange={(e) => setMenu(e.target.value)}
              style={{ flex: 1, padding: '8px', borderRadius: '6px', border: '1px solid #D2E4F0' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            {/* 리뷰 내용을 입력받는 여러 줄 텍스트 영역(textarea)입니다. */}
            <textarea 
              placeholder="리뷰 내용을 입력해주세요." 
              value={comment} 
              onChange={(e) => setComment(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #D2E4F0', height: '80px', boxSizing: 'border-box' }}
            />
          </div>
          {/* 작성 완료된 폼 데이터를 제출하는 등록 버튼입니다. */}
          <button 
            type="submit"
            style={{ width: '100%', padding: '10px', background: '#2A1B18', color: '#D2E4F0', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
          >
            등록하기
          </button>
        </form>
      )}

      {/* 내가 작성한 리뷰 목록 섹션의 제목과 총 리뷰 개수를 출력합니다. */}
      <h3 style={{ fontSize: '16px', margin: '20px 0 10px 0', color: '#2A1B18' }}>내가 작성한 리뷰 목록 ({reviews.length})</h3>
      {/* 작성된 리뷰 배열의 길이가 0인지 검사하여 비어있을 경우 안내 문구를 출력합니다. */}
      {reviews.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#777', padding: '30px 0' }}>작성된 리뷰가 없습니다.</p>
      ) : (
        // 리뷰가 존재할 경우 reviews 배열을 순회(.map)하며 개별 ReviewCard 컴포넌트를 생성합니다.
        reviews.map((review) => (
          <ReviewCard 
            key={review.id} 
            review={review} 
            onDelete={deleteReview} 
            onUpdate={updateReview} 
          />
        ))
      )}
    </div>
  );
}