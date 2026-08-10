// React 라이브러리를 불러와서 컴포넌트를 만들 수 있도록 합니다.
import React from 'react';
// 프로필 카드 전용 스타일 시트 파일(ProfileCard.css)을 불러옵니다.
import './ProfileCard.css';

// 사용자의 프로필 정보와 통계(방문 기록, 리뷰 개수)를 보여주는 ProfileCard 컴포넌트를 정의하고 내보냅니다.
export default function ProfileCard({ recentCount, reviewCount }) {
  return (
    // 프로필 카드를 감싸는 메인 컨테이너 영역입니다.
    <div className="profile-card">
      {/* 리본 이모지와 함께 회원의 닉네임(등급)을 나타내는 텍스트를 출력합니다. */}
      <p className="profile-nickname">🎀 도장깨기 마니아 회원님</p>
      {/* 부모 컴포넌트로부터 전달받은 방문 기록 수(recentCount)와 작성한 리뷰 수(reviewCount)를 통계 텍스트로 출력합니다. */}
      <p className="profile-stats">방문 기록 {recentCount}개 | 작성한 리뷰 {reviewCount}개</p>
    </div>
  );
}