// React 라이브러리를 불러와서 컴포넌트를 정의할 수 있도록 합니다.
import React from 'react';
// 지도 영역 전용 스타일 시트 파일(MapArea.css)을 불러옵니다.
import './MapArea.css';

// 인터랙티브 지도 영역을 담당하는 MapArea 컴포넌트를 정의하고 기본 내보내기(Export)합니다.
export default function MapArea() {
  return (
    // 지도를 감싸는 메인 컨테이너 영역입니다.
    <div className="map-container">
      {/* 지도 영역임을 나타내는 메인 텍스트(이모지와 안내 문구)를 출력합니다. */}
      <span>🗺️ 인터랙티브 지도 맵 영역</span>
      {/* 주변 핫플레이스 핀이 표시된다는 부가 설명 서브 텍스트를 출력합니다. */}
      <span className="map-subtext">현재 주변의 핫플 핀이 표시됩니다</span>
    </div>
  );
}