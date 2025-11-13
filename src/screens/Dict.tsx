/**
 * Dict 컴포넌트
 * 
 * 키워드별 질문 확인 화면 컴포넌트
 * - 사용자가 키워드별로 질문한 내용을 확인할 수 있는 화면
 * - 8개의 키워드 카드를 2x4 그리드로 표시
 * - 각 키워드 카드를 클릭하면 ReminderPopup 팝업 표시
 * - 빙고 스탬프 아이콘을 클릭하면 BingoPopup 팝업 표시
 * - 각 카드에는 키워드명, 질문 개수, 최근 업데이트 날짜 표시
 */

import React, { useState } from "react";
import styled from "styled-components";

// 다른 컴포넌트 import
import { CardTopRight } from "../components/DictCard"; // 키워드 카드 우측 상단 숫자/화살표 컴포넌트
import HeaderBar from "../components/HeaderBar"; // 상단 헤더 바 컴포넌트
import StatusBar from "../components/StatusBar"; // 상태바 컴포넌트

// 이미지 import
import bingoStamp from "../assets/img/bingostamp.png"; // 빙고 스탬프 아이콘 이미지

// 팝업 컴포넌트 import
import ReminderPopup from "../components/ReminderPopup"; // 키워드 상세 설명 팝업
import BingoPopup from "../components/BingoPopup"; // 빙고 팝업

// ===================== Styled Components =====================

/**
 * StyledDict - 메인 컨테이너
 * - 크기: 402px x 874px
 * - 배경색: #f8f8f8 (연한 회색)
 * - 세로 스크롤 가능 (overflow-y: auto)
 * - 가로 스크롤 불가 (overflow-x: hidden)
 * - 커스텀 스크롤바 스타일 적용 (너비: 6px, 투명한 트랙, 회색 썸)
 */
const StyledDict = styled.div`
  position: relative;
  width: 402px;
  height: 874px;
  background: #f8f8f8;
  overflow-y: auto;
  overflow-x: hidden;

  /* 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;

/**
 * TitleContainer - 제목과 빙고 아이콘을 포함하는 컨테이너
 * - 위치: absolute, top: 145px
 * - flex 레이아웃으로 제목과 아이콘을 좌우로 배치 (justify-content: space-between)
 * - padding: 0 16px
 * - z-index: 10으로 다른 요소 위에 표시
 */
const TitleContainer = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 145px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  box-sizing: border-box;
  z-index: 10;
`;

/**
 * StyledTitle - 제목 텍스트
 * - 폰트: Nunito, 크기: 24px, 굵기: 600
 * - 색상: #000000 (검은색)
 * - 왼쪽 정렬 (text-align: left)
 * - letter-spacing: -0.43px로 자간 조정
 */
const StyledTitle = styled.span`
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  text-align: left;
  letter-spacing: -0.43px;
  color: #000000;
  display: flex;
  align-items: center;
`;

/**
 * StyledImage38 - 빙고 스탬프 아이콘
 * - 크기: 58px x 58px
 * - 클릭 가능 (cursor: pointer)
 * - hover 시 확대 효과 (transform: scale(1.1))
 * - transition: transform 0.2s ease로 부드러운 애니메이션
 */
const StyledImage38 = styled.img`
  width: 58px;
  height: 58px;
  cursor: pointer;
  transition: transform 0.2s ease;
  object-fit: contain;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.1);
  }
`;

/**
 * CardGrid - 키워드 카드 그리드
 * - 위치: absolute, top: 233px
 * - 2열 그리드 레이아웃 (grid-template-columns: repeat(2, 182px))
 * - 간격: 12px (세로), 20px (가로)
 * - padding-bottom: 30px로 하단 여백 추가
 * - 중앙 정렬 (justify-content: center)
 */
const CardGrid = styled.div`
  position: absolute;
  top: 233px;
  left: 10px;
  right: 10px;
  display: grid;
  grid-template-columns: repeat(2, 182px);
  gap: 12px 20px;
  padding-bottom: 30px;
  justify-content: center;
`;

/**
 * KeywordCard - 키워드 카드
 * - 크기: 182px x 138px
 * - 배경색: #ffffff (흰색)
 * - border-radius: 15px로 둥근 모서리
 * - 그림자 효과 (box-shadow)
 * - 테두리: 1px solid rgba(0, 0, 0, 0.08)
 * - 클릭 가능 (cursor: pointer)
 * - hover 시 위로 이동 효과 (transform: translateY(-2px))
 * - active 시 원래 위치로 복귀
 */
const KeywordCard = styled.div`
  position: relative;
  width: 182px;
  height: 138px;
  border-radius: 15px;
  background: #ffffff;
  overflow: hidden;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;

/**
 * CardTop - 카드 상단 영역
 * - 높이: 69px
 * - flex 레이아웃으로 키워드명과 숫자/화살표를 좌우로 배치
 * - 모든 자식 요소를 수직 중앙 정렬 (align-items: center)
 * - padding: 0 16px
 * - 배경색: #ffffff (흰색)
 */
const CardTop = styled.div`
  height: 69px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  font-family: "SF Pro", sans-serif;
  font-size: 17px;
  font-weight: 510;
  color: #000;
  background: #ffffff;
  box-sizing: border-box;
  position: relative;

  /* 모든 자식 요소를 정확히 중앙 정렬 */
  > * {
    display: flex;
    align-items: center;
    height: 100%;
  }
`;

/**
 * CardLabel - 키워드명 레이블
 * - 폰트: SF Pro, 크기: 17px, 굵기: 510
 * - 색상: #000 (검은색)
 * - 왼쪽 정렬 (justify-content: flex-start)
 * - 수직 중앙 정렬 (align-items: center)
 * - flex-shrink: 0으로 크기 고정
 */
const CardLabel = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  line-height: 1.2;
  font-family: "SF Pro", sans-serif;
  font-size: 17px;
  font-weight: 510;
  color: #000;
  height: 100%;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
`;

/**
 * CardRightWrapper - 카드 우측 영역 래퍼
 * - 숫자와 화살표를 포함하는 컨테이너
 * - 오른쪽 정렬 (justify-content: flex-end)
 * - 수직 중앙 정렬 (align-items: center)
 * - gap: 4px로 숫자와 화살표 간격 조정
 * - CardTopRight 내부 요소들의 정렬 통일을 위한 스타일 적용
 */
const CardRightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  gap: 4px;
  flex-shrink: 0;
  min-width: fit-content;
  margin: 0;
  padding: 0;
  line-height: 1;

  /* CardTopRight 내부 요소들의 정렬 통일 */
  > * {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    vertical-align: middle;
  }

  /* 숫자와 화살표 간격 통일 */
  > * > * {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    line-height: 1;
  }
`;

/**
 * CardBottom - 카드 하단 영역 (최근 업데이트 날짜)
 * - 높이: 69px
 * - 배경색: rgba(92, 110, 255, 0.3) (연한 파란색/보라색)
 * - flex 레이아웃으로 날짜를 세로로 배치 (flex-direction: column)
 * - 왼쪽 정렬 (align-items: flex-start)
 * - padding: 8px 16px
 */
const CardBottom = styled.div`
  height: 69px;
  background: rgba(92, 110, 255, 0.3);
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

/**
 * UpdateYear - 업데이트 연도
 * - 폰트: SF Pro, 크기: 10px, 굵기: 600
 * - 색상: rgba(0, 0, 0, 0.6) (회색)
 * - line-height: 1.3
 * - display: block으로 블록 요소로 표시
 */
const UpdateYear = styled.span`
  font-size: 10px;
  color: rgba(0, 0, 0, 0.6);
  font-family: "SF Pro", sans-serif;
  font-weight: 600;
  line-height: 1.3;
  display: block;
`;

/**
 * UpdateMonthDay - 업데이트 월일
 * - 폰트: SF Pro, 크기: 10px, 굵기: 600
 * - 색상: rgba(0, 0, 0, 0.6) (회색)
 * - line-height: 1.3
 * - margin-top: 3px로 연도와 간격 조정
 * - display: block으로 블록 요소로 표시
 */
const UpdateMonthDay = styled.span`
  font-size: 10px;
  color: rgba(0, 0, 0, 0.6);
  font-family: "SF Pro", sans-serif;
  font-weight: 600;
  line-height: 1.3;
  display: block;
  margin-top: 3px;
`;

/**
 * DictProps - Dict 컴포넌트 Props 인터페이스
 * - onBack?: () => void - 뒤로가기 콜백 함수 (선택적)
 * - onClose?: () => void - 닫기 콜백 함수 (선택적)
 */
interface DictProps {
  onBack?: () => void;
  onClose?: () => void;
}

// ===================== Component =====================

/**
 * Dict - 키워드별 질문 확인 화면 컴포넌트
 * - Props: onBack, onClose (선택적)
 * - 상태 관리:
 *   - selectedKeyword: 선택된 키워드 (string | null)
 *   - showBingoPopup: 빙고 팝업 표시 여부 (boolean)
 * - 키워드 카드 데이터: cards 배열 (하드코딩되어 있음, 백엔드 API로 대체 가능)
 * - 날짜 파싱: "25.11.10" 형식을 "2025년" / "11월 10일" 형식으로 변환
 * - 조건부 렌더링: selectedKeyword가 있으면 ReminderPopup 표시, showBingoPopup이 true이면 BingoPopup 표시
 */
const Dict: React.FC<DictProps> = ({ onBack, onClose }) => {
  // 선택된 키워드 상태 관리
  // - 키워드 카드를 클릭하면 해당 키워드명이 저장됨
  // - ReminderPopup 팝업 표시에 사용
  // - 팝업을 닫으면 null로 초기화
  const [selectedKeyword, setSelectedKeyword] = useState<string | null>(null);

  // 빙고 팝업 표시 여부 상태 관리
  // - 빙고 스탬프 아이콘을 클릭하면 true로 설정
  // - BingoPopup 팝업 표시에 사용
  // - 팝업을 닫으면 false로 초기화
  const [showBingoPopup, setShowBingoPopup] = useState(false);

  // 키워드 카드 데이터 배열
  // - label: 키워드명 (예: "S&P 500", "ETF", "나스닥" 등)
  // - date: 최근 업데이트 날짜 (형식: "25.11.10" - "년.월.일")
  // - num: 질문 개수 (예: "7", "3", "5" 등)
  // - 백엔드 API로 동적 데이터를 가져올 수 있음
  const cards = [
    { label: "S&P 500", date: "25.11.10", num: "7" },
    { label: "ETF", date: "25.11.11", num: "3" },
    { label: "나스닥", date: "25.11.10", num: "5" },
    { label: "PER", date: "25.11.10", num: "4" },
    { label: "EPS", date: "25.11.10", num: "9" },
    { label: "배당수익률", date: "25.11.10", num: "6" },
    { label: "시가총액", date: "25.11.10", num: "8" },
    { label: "매도", date: "25.11.10", num: "2" },
  ];

  return (
    <StyledDict>
      {/* 상태바 컴포넌트 */}
      <StatusBar />
      {/* 헤더 바 컴포넌트 - 제목: "키우Me 도감", onBack, onClose 콜백 전달 */}
      <HeaderBar title="키우Me 도감" onBack={onBack} onClose={onClose} />

      {/* 제목과 빙고 아이콘 컨테이너 */}
      <TitleContainer>
        {/* 제목 텍스트 */}
        <StyledTitle>키워드별 내 질문 확인하기</StyledTitle>
        {/* 빙고 스탬프 아이콘 - 클릭 시 빙고 팝업 표시 */}
        <StyledImage38
          src={bingoStamp}
          alt="빙고 아이콘"
          onClick={() => setShowBingoPopup(true)}
        />
      </TitleContainer>

      {/* 키워드 카드 그리드 */}
      <CardGrid>
        {cards.map((card) => (
          <KeywordCard
            key={card.label}
            onClick={() => setSelectedKeyword(card.label)}
          >
            {/* 카드 상단 영역 - 키워드명과 숫자/화살표 */}
            <CardTop>
              {/* 키워드명 */}
              <CardLabel>{card.label}</CardLabel>
              {/* 숫자와 화살표 래퍼 */}
              <CardRightWrapper>
                {/* CardTopRight 컴포넌트 - 질문 개수(num)를 props로 전달 */}
                <CardTopRight number={card.num} />
              </CardRightWrapper>
            </CardTop>
            {/* 카드 하단 영역 - 최근 업데이트 날짜 */}
            <CardBottom>
              {(() => {
                // 날짜 파싱 로직
                // - card.date를 "." 기준으로 분리 (예: "25.11.10" -> ["25", "11", "10"])
                const parts = card.date.split('.');
                // - 연도: "20" + parts[0] (예: "25" -> "2025")
                const year = "20" + parts[0]; // "25" -> "2025"
                // - 월: parts[1] (예: "11")
                const month = parts[1]; // "11"
                // - 일: parts[2] (예: "10" or "11")
                const day = parts[2]; // "10" or "11"
                // - "2025년" / "11월 10일" 형식으로 반환
                return (
                  <>
                    <UpdateYear>{year}년</UpdateYear>
                    <UpdateMonthDay>{month}월 {day}일</UpdateMonthDay>
                  </>
                );
              })()}
            </CardBottom>
          </KeywordCard>
        ))}
      </CardGrid>

      {/* 조건부 렌더링: 선택된 키워드가 있으면 ReminderPopup 팝업 표시 */}
      {selectedKeyword && (
        <ReminderPopup
          keyword={selectedKeyword}
          onClose={() => setSelectedKeyword(null)}
        />
      )}

      {/* 조건부 렌더링: showBingoPopup이 true이면 BingoPopup 팝업 표시 */}
      {showBingoPopup && <BingoPopup onClose={() => setShowBingoPopup(false)} />}
    </StyledDict>
  );
};

export default Dict;
