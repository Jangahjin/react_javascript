// React 라이브러리를 불러와서 컴포넌트를 정의할 수 있도록 합니다.
import React from 'react';
// 추천 섹션 전용 스타일 시트 파일(RecommendSection.css)을 불러옵니다.
import './RecommendSection.css';

// 추천 매장 목록과 최근 본 매장 추가 함수를 props로 받는 RecommendSection 컴포넌트를 정의하고 내보냅니다.
export default function RecommendSection({ recommendedStores, addRecentStore }) {
  return (
    // 추천 섹션을 감싸는 메인 컨테이너 영역입니다.
    <section className="recommend-section">
      {/* 추천 섹션의 제목을 출력합니다. */}
      <h3>✨ 최근 본 매장과 비슷한 곳 추천</h3>
      <div className="recommend-scroll">
        {recommendedStores.map((store) => (
          <div key={store.id} className="recommend-card" onClick={() => addRecentStore(store)}>
            <img src={store.image} alt={store.name} className="recommend-img" />
            <p className="recommend-name">{store.name}</p>
            <span className="recommend-tag">{store.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}