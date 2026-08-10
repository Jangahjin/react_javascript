// React 라이브러리와 상태 관리 훅인 useState를 불러옵니다.
import React, { useState } from "react";

// 최근 본 매장 목록 화면을 담당하는 RecentView 컴포넌트를 정의하고 내보냅니다.
export default function RecentView({ setCurrentView, recentStores = [], deleteRecentStore }) {
  // 🔍 검색창에 입력되는 검색어를 관리하는 상태 변수입니다.
  const [searchTerm, setSearchTerm] = useState("");

  // 입력된 검색어(searchTerm)를 기준으로 매장 이름이나 카테고리가 일치하는 항목만 안전하게 필터링합니다.
  const filteredStores = recentStores.filter((store) => {
    const name = store?.name || "";
    const category = store?.category || "";
    const term = searchTerm.toLowerCase();
    
    return name.toLowerCase().includes(term) || category.toLowerCase().includes(term);
  });

  return (
    // 전체 컨테이너 영역입니다.
    <div style={{ padding: '20px', backgroundColor: '#FFFFFF', minHeight: '100vh', fontFamily: 'Pretendard, sans-serif' }}>
      
      {/* 상단 헤더 영역 (뒤로가기 버튼과 타이틀) */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
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
        <h2 style={{ fontSize: '17px', fontWeight: '700', color: '#2A1B18', margin: 0 }}>
          최근 본 매장 목록
        </h2>
      </div>

      {/* 🔍 최근 본 매장 검색 입력 필드 영역입니다. */}
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="최근 본 매장 이름 또는 카테고리를 검색하세요" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 16px',
            borderRadius: '12px',
            border: '1px solid #D2E4F0',
            backgroundColor: '#F9F9F9',
            boxSizing: 'border-box',
            outline: 'none',
            fontSize: '14px',
            color: '#2A1B18'
          }}
        />
      </div>

      {/* 매장 목록 개수 출력 */}
      <h3 style={{ fontSize: '16px', margin: '0 0 15px 0', color: '#2A1B18' }}>
        검색 결과 ({filteredStores.length}개)
      </h3>

      {/* 필터링된 매장 목록 렌더링 */}
      {filteredStores.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#777', padding: '40px 0' }}>
          {searchTerm ? '검색 결과가 없습니다.' : '최근 본 매장 기록이 없습니다.'}
        </p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {filteredStores.map((store) => (
            <div 
              key={store.id} 
              style={{ 
                padding: '16px', 
                backgroundColor: '#F9F9F9', 
                borderRadius: '12px', 
                border: '1px solid #2A1B18',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div>
                <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#2A1B18', marginBottom: '4px' }}>
                  {store.name}
                </div>
                <div style={{ fontSize: '14px', color: '#555' }}>
                  카테고리: {store.category}
                </div>
              </div>
            
            </div>
          ))}
        </div>
      )}
    </div>
  );
}