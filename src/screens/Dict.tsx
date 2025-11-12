import React, { useState } from "react";
import styled from "styled-components";
import { CardTopRight } from "../components/DictCard"; // 타입 확인 필요
import HeaderBar from "../components/HeaderBar";
import StatusBar from "../components/StatusBar";
import bingoStamp from "../assets/img/bingostamp.png";
import ReminderPopup from "../components/ReminderPopup"; // 팝업 import

// ===================== Styled Components =====================
const StyledDict = styled.div`
  position: relative;
  width: 402px;
  height: 874px;
  background: #ffffff;
  overflow: hidden;
`;

const StyledTitle = styled.span`
  position: absolute;
  width: 297px;
  height: 48px;
  left: -23px;
  top: 157px;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.43px;
  color: #000000;
`;

const StyledImage38 = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  left: 338px;
  top: 145px;
`;

const CardGrid = styled.div`
  position: absolute;
  top: 240px;
  left: 10px;
  display: grid;
  grid-template-columns: repeat(2, 182px);
  gap: 18px 20px;
`;

const KeywordCard = styled.div`
  position: relative;
  width: 182px;
  height: 146px;
  border-radius: 15px;
  background: white;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const CardTop = styled.div`
  height: 73px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  font-family: "SF Pro", sans-serif;
  font-size: 17px;
  font-weight: 510;
  color: #000;
`;

const CardBottom = styled.div`
  height: 73px;
  background: rgba(92, 110, 255, 0.3);
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UpdateLabel = styled.span`
  font-size: 10px;
  color: #a9a9a9;
  font-family: "SF Pro", sans-serif;
`;

const UpdateDate = styled.span`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
  font-family: "SF Pro", sans-serif;
`;

interface DictProps {
  onBack? : () => void ;
  onClose? : () => void ; 
}


// ===================== Component =====================
const Dict: React.FC<DictProps> = ({onBack, onClose}) => {
  const [selectedKeyword, setSelectedKeyword] = useState<string | null>(null);

  const cards = [
    { label: "S&P 500", date: "2025.11.10", num: "7" },
    { label: "ETF", date: "2025.11.11", num: "3" },
    { label: "나스닥", date: "2025.11.10", num: "5" },
    { label: "PER", date: "2025.11.10", num: "4" },
    { label: "EPS", date: "2025.11.10", num: "9" },
    { label: "배당수익률", date: "2025.11.10", num: "6" },
    { label: "시가총액", date: "2025.11.10", num: "8" },
    { label: "매도", date: "2025.11.10", num: "2" },
  ];

  return (
    <StyledDict>
      <StatusBar />
      <HeaderBar
        title="키우Me 도감"
        onBack={onBack}
        onClose={onClose}
      />

      <StyledTitle>키워드별 질문 확인하기</StyledTitle>
      <StyledImage38 src={bingoStamp} alt="도감 아이콘" />

      <CardGrid>
        {cards.map((card) => (
          <KeywordCard
            key={card.label} // key를 label로 고유하게 지정
            onClick={() => setSelectedKeyword(card.label)}
          >
            <CardTop>
              {card.label}
              <CardTopRight number={card.num} />
            </CardTop>
            <CardBottom>
              <UpdateLabel>최근 업데이트 일자</UpdateLabel>
              <UpdateDate>{card.date}</UpdateDate>
            </CardBottom>
          </KeywordCard>
        ))}
      </CardGrid>

      {selectedKeyword && (
        <ReminderPopup
          keyword={selectedKeyword}
          onClose={() => setSelectedKeyword(null)}
        />
      )}
    </StyledDict>
  );
};

export default Dict;

