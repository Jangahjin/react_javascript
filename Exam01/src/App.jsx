// React 라이브러리와 상태 관리 훅인 useState를 불러옵니다.
import React, { useState } from "react";
// 앱의 메인 홈 화면 컴포넌트를 불러옵니다.
import Home from "./pages/Home";
// 최근 본 매장 목록 화면 컴포넌트를 불러옵니다.
import RecentView from "./pages/RecentView";
// 사용자 마이페이지 및 리뷰 관리 화면 컴포넌트를 불러옵니다.
import Mypage from "./pages/Mypage";
// 지도 영역 컴포넌트를 불러옵니다.
import MapArea from "./components/MapArea";
import ProfileCard from "./components/ProfileCard";

// 애플리케이션의 최상위 컴포넌트인 App을 정의하고 내보냅니다.
function App() {
  // 현재 어떤 화면을 보여줄지 결정하는 상태 변수입니다 (기본값 'home').
  const [currentView, setCurrentView] = useState('home');

  // 사용자가 최근 본 매장들의 데이터를 관리하는 상태 배열입니다 (초기 데이터 2개 포함).
  const [recentStores, setRecentStores] = useState([
    { id: 1, name: '로우하이 카페', category: '디저트카페', image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=150' },
    { id: 2, name: '파스타클럽 성수', category: '이탈리안', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=150' },
  ]);

  // 사용자가 작성한 리뷰 목록 데이터를 관리하는 상태 배열입니다 (초기 리뷰 1개 포함).
  const [reviews, setReviews] = useState([
    { id: 1, storeName: '로우하이 카페', rating: 5, menu: '소금빵, 아메리카노', comment: '분위기가 너무 예쁘고 인생샷 건졌어요!', date: '2026-06-01' }
  ]);

  // 새로운 매장을 최근 본 매장 목록에 추가하는 함수입니다 (중복 제거 및 최신 항목 맨 앞 배치).
  const addRecentStore = (store) => {
    setRecentStores((prev) => {
      const filtered = prev.filter((item) => item.id !== store.id);
      return [store, ...filtered];
    });
  };

  // 특정 ID를 가진 최근 본 매장을 목록에서 삭제하는 함수입니다.
  const deleteRecentStore = (id) => {
    setRecentStores((prev) => prev.filter((item) => item.id !== id));
  };

  // 특정 ID를 가진 리뷰를 목록에서 삭제하는 함수입니다.
  const deleteReview = (id) => {
    setReviews((prev) => prev.filter((item) => item.id !== id));
  };

  // 특정 ID를 가진 리뷰의 코멘트 내용(newComment)을 수정하는 함수입니다.
  const updateReview = (id, newComment) => {
    setReviews((prev) =>
      prev.map((item) => (item.id === id ? { ...item, comment: newComment } : item))
    );
  };

  // 📝 새로운 글(리뷰)을 리뷰 목록 맨 앞에 추가하는 함수입니다.
  const addReview = (newReview) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  return (
    // 전체 앱의 최대 너비와 중앙 정렬, 그림자 효과를 주는 최상위 컨테이너 영역입니다.
    <div style={{ maxWidth: '480px', margin: '0 auto', boxShadow: '0 0 20px rgba(0,0,0,0.05)' }}>
      {/* currentView 상태가 'home'일 때 Home 컴포넌트를 렌더링하고 필요한 상태와 함수들을 props로 전달합니다. */}
      {currentView === 'home' && (
        <Home 
          setCurrentView={setCurrentView} 
          recentStores={recentStores} 
          addRecentStore={addRecentStore} 
        />
      )}
      {/* currentView 상태가 'recent'일 때 RecentView 컴포넌트를 렌더링하고 관련 데이터와 삭제 함수를 전달합니다. */}
      {currentView === 'recent' && (
        <RecentView 
          setCurrentView={setCurrentView} 
          recentStores={recentStores} 
          deleteRecentStore={deleteRecentStore} 
        />
      )}
      {/* currentView 상태가 'mypage'일 때 Mypage 컴포넌트를 렌더링하고 리뷰 관리 관련 함수와 데이터를 전달합니다. */}
      {currentView === 'mypage' && (
        <Mypage 
          setCurrentView={setCurrentView} 
          recentStores={recentStores} 
          reviews={reviews} 
          deleteReview={deleteReview} 
          updateReview={updateReview} 
          addReview={addReview}
        >
          <ProfileCard />
        </Mypage>
      )}
    </div>
  );
}

export default App;