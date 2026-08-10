// React 라이브러리를 불러와서 컴포넌트 작성을 가능하게 합니다.
import React from "react";
// 앱 전용 스타일 시트 파일(App.css)을 불러옵니다.
import '../App.css';
import MapArea from '../components/MapArea';

// 홈 화면을 담당하는 Home 컴포넌트를 정의하고 내보냅니다. (화면 전환 함수와 최근 본 매장 관련 props를 받습니다.)
function Home({ setCurrentView, recentStores, addRecentStore }) {
  return (
    // 전체 앱 화면을 감싸는 메인 컨테이너 영역입니다.
    <div className="app-container">
      {/* 상단 헤더 영역이며, Flexbox를 이용해 좌우 요소들을 양 끝으로 정렬합니다. */}
      <div className="star-pattern-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          {/* 상단 작은 환영 문구를 출력합니다. */}
          <span style={{ fontSize: '12px', opacity: 0.8, fontWeight: 'bold' }}>WELCOME BACK</span>
          {/* 'Midstar' 커스텀 폰트가 적용된 메인 스토어 타이틀을 출력합니다. */}
          <h2 style={{ margin: '4px 0 0 0', fontSize: '20px', color: '#2A1B18', fontFamily: "'Midstar', sans-serif" }}>
            Star Mood Store ⭐
          </h2>
        </div>
        {/* 클릭 시 즐겨찾기 안내 알림을 띄우는 찜목록 버튼입니다. */}
        <button 
          onClick={() => alert('즐겨찾기(찜) 목록 기능입니다!')}
          style={{ 
            background: '#2A1B18', 
            color: '#D2E4F0', 
            padding: '8px 12px', 
            borderRadius: '20px', 
            fontSize: '12px', 
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          ⭐ 찜목록
        </button>
      </div>

      {/* 검색 바 입력 필드를 감싸는 패딩 영역입니다. */}
      <div style={{ padding: '16px' }}>
        {/* 상품이나 서비스를 검색할 수 있는 텍스트 입력창입니다. */}
        <input 
          type="text" 
          placeholder="원하시는 상품이나 서비스를 검색하세요" 
          style={{
            width: '100%',
            padding: '12px 16px',
            borderRadius: '12px',
            border: '1px solid #1A1A1A',
            backgroundColor: '#F9F9F9',
            boxSizing: 'border-box',
            outline: 'none',
            fontSize: '14px'
          }}
        />
      </div>

      <MapArea />

      {/* 카테고리 목록을 보여주는 스크롤 가능 영역입니다. */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {/* 'FriendBestie' 폰트가 적용된 추천 카테고리 섹션 제목입니다. */}
        <div style={{ padding: '0 16px', fontWeight: 'bold', fontSize: '16px', color: '#2A1B18', fontFamily: "'FriendBestie', sans-serif" }}>
          Featured Categories
        </div>
        {/* 4개의 카테고리 아이템을 배치하는 그리드 컨테이너입니다. */}
        <div className="grid-container">
          {/* 배열 [1, 2, 3, 4]를 순회하며 4개의 카드 아이템을 동적으로 생성합니다. */}
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="card-item">
              {/* 카테고리 이미지 대용으로 쓰이는 상자 영역입니다. */}
              <div style={{ width: '100%', height: '90px', backgroundColor: '#D2E4F0', borderRadius: '10px', marginBottom: '8px' }}></div>
              {/* 각 카테고리의 이름을 출력합니다. */}
              <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#1A1A1A' }}>Category {item}</div>
              {/* 탐색 유도용 서브 텍스트를 출력합니다. */}
              <div style={{ fontSize: '12px', color: '#777', marginTop: '2px' }}>Explore items</div>
            </div>
          ))}
        </div>
      </div>

      {/* 화면 하단에 고정되어 페이지 이동을 돕는 네비게이션 바 영역입니다. */}
      <div className="bottom-nav">
        {/* 현재 홈 화면임을 나타내는 활성 상태의 홈 버튼입니다. */}
        <span style={{ cursor: 'pointer', fontWeight: 'bold' }}>🏠 Home</span>
        {/* 클릭 시 최근 본 매장 화면('recent')으로 전환되는 버튼입니다. */}
        <span style={{ cursor: 'pointer', opacity: 0.6 }} onClick={() => setCurrentView('recent')}>📦 Recent</span>
        {/* 클릭 시 마이페이지/프로필 화면('mypage')으로 전환되는 버튼입니다. */}
        <span style={{ cursor: 'pointer', opacity: 0.6 }} onClick={() => setCurrentView('mypage')}>👤 Profile</span>
      </div>
    </div>
  );
}

// Home 컴포넌트를 기본 내보내기(Export)합니다.
export default Home;