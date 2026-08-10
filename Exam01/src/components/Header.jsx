// React 라이브러리를 불러와서 컴포넌트를 정의할 수 있도록 합니다.
import React from 'react';
// 헤더 컴포넌트 전용 스타일 시트 파일(Header.css)을 불러옵니다.
import './Header.css';

// 메인 화면용 헤더 컴포넌트(HomeHeader)를 선언하고 내보냅니다. 화면 전환 함수(setCurrentView)를 props로 받습니다.
export function HomeHeader({ setCurrentView }) {
  return (
    <header className="common-header">
      {/* 앱의 서비스 타이틀을 출력합니다. */}
      <h2 className="header-title">나만의 맛집/카페 아카이브</h2>
      <div className="header-icons">
        {/* '최근 본 매장' 아이콘 버튼이며, 클릭 시 화면 상태를 'recent'로 전환합니다. */}
        <button className="icon-btn" onClick={() => setCurrentView('recent')} title="최근 본 매장">🕒</button>
        {/* '마이페이지' 아이콘 버튼이며, 클릭 시 화면 상태를 'mypage'로 전환합니다. */}
        <button className="icon-btn" onClick={() => setCurrentView('mypage')} title="마이페이지">👤</button>
      </div>
    </header>
  );
}

// 서브 화면용 헤더 컴포넌트(SubHeader)를 선언하고 내보냅니다. 페이지 제목(title)과 화면 전환 함수를 props로 받습니다.
export function SubHeader({ title, setCurrentView }) {
  return (
    <header className="common-header">
      {/* 클릭 시 이전 화면인 'home'으로 되돌아가는 뒤로 가기 버튼입니다. */}
      <button className="back-btn" onClick={() => setCurrentView('home')}>←</button>
      {/* 전달받은 타이틀을 가운데 정렬하여 출력합니다. */}
      <h2 className="header-title" style={{ flex: 1, textAlign: 'center' }}>{title}</h2>
      {/* 좌우 대칭(Flex 여백)을 맞추기 위한 빈 공간용 div 요소입니다. */}
      <div style={{ width: '24px' }}></div>
    </header>
  );
}

// 이 파일의 기본 내보내기(Default Export)로 HomeHeader 컴포넌트를 지정합니다.
export default HomeHeader;