// React 라이브러리를 불러와서 컴포넌트 생성 기능을 사용할 수 있도록 합니다.
import React from 'react';
// 컴포넌트 전용 스타일 시트 파일(ArchiveChip.css)을 불러옵니다.
import './ArchiveChip.css';

// 최근 둘러본 매장 목록을 칩 형태로 보여주는 ArchiveChipList 컴포넌트를 정의하고 내보냅니다.
export default function ArchiveChipList({ recentStores }) {
  return (
    <section>
      {/* 섹션의 제목을 출력합니다 (폰트 크기, 굵기, 색상 등 인라인 스타일 적용). */}
      <h3 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '12px', color: '#444' }}>📌 내가 둘러본 매장 아카이브</h3>
      
      {/* recentStores 배열의 길이가 0인지(둘러본 매장이 없는지) 삼항 연산자로 확인합니다. */}
      {recentStores.length === 0 ? (
        // 매장이 없을 경우 출력할 안내 문구입니다.
        <p style={{ fontSize: '12px', color: '#888' }}>둘러본 매장이 없습니다.</p>
      ) : (
        // 매장이 있을 경우 가로 스크롤 영역을 감싸는 컨테이너를 생성합니다.
        <div className="archive-scroll">
          {/* recentStores 배열을 순회(.map)하며 각 매장 데이터를 칩 요소로 변환합니다. */}
          {recentStores.map((store) => (
            // 각 칩의 고유 식별자(key)를 지정하고, 매장 이름(store.name)을 텍스트로 출력합니다.
            <div key={store.id} className="archive-chip">{store.name}</div>
          ))}
        </div>
      )}
    </section>
  );
}