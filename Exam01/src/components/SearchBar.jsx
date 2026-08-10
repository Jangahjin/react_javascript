import React from 'react';
import './SearchBar.css';

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-section">
      <select className="search-select">
        <option>성수/홍대</option>
        <option>강남/한남</option>
        <option>연남/합정</option>
        <option>용산/여의도</option>
        <option>분당</option>
      </select>
      <input 
        type="text" 
        className="search-input"
        placeholder="가게 이름 또는 장소 검색" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}