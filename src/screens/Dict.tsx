import React, { useState } from "react";
import styled from "styled-components";
import { CardTopRight } from "../components/DictCard";
import HeaderBar from "../components/HeaderBar";
import StatusBar from "../components/StatusBar";
import bingoStamp from "../assets/img/bingostamp.png";
import ReminderPopup from "../components/ReminderPopup";
import BingoPopup from "../components/BingoPopup";

const StyledDict = styled.div`
  position: relative;
  width: 402px;
  height: 874px;
  background: #f8f8f8;
  overflow-y: auto;
  overflow-x: hidden;
`;

const TitleContainer = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 145px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  z-index: 10;
`;

const StyledTitle = styled.span`
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.43px;
  color: #000000;
  display: flex;
  align-items: center;
`;

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
`;

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
  position: relative;
`;

const CardLabel = styled.span`
  display: flex;
  align-items: center;
  font-family: "SF Pro", sans-serif;
  font-size: 17px;
  font-weight: 510;
  color: #000;
`;

const CardBottom = styled.div`
  height: 69px;
  background: rgba(92, 110, 255, 0.3);
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 3px
`;

const UpdateYear = styled.span`
  font-size: 10px;
  color: rgba(0, 0, 0, 0.7);
  font-family: "SF Pro", sans-serif;
  font-weight: 600;
`;

const UpdateMonthDay = styled.span`
  font-size: 10px;
  color: rgba(0, 0, 0, 0.7);
  font-family: "SF Pro", sans-serif;
  font-weight: 600;
  margin-top: 0px;
`;


//////////////////////////////////////////
// ⭐ DictProps에 mentorType 추가
//////////////////////////////////////////
interface DictProps {
  onBack?: () => void;
  onClose?: () => void;
}

const Dict: React.FC<DictProps> = ({ onBack, onClose}) => {
  const [selectedKeyword, setSelectedKeyword] = useState<string | null>(null);
  const [showBingoPopup, setShowBingoPopup] = useState(false);

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
      <StatusBar />
      <HeaderBar title="일취월챗 도감" onBack={onBack} onClose={onClose} />

      <TitleContainer>
        <StyledTitle>키워드별 내 질문 확인하기</StyledTitle>
        <StyledImage38
          src={bingoStamp}
          alt="빙고 아이콘"
          onClick={() => setShowBingoPopup(true)}
        />
      </TitleContainer>

      <CardGrid>
        {cards.map((card) => {
          const parts = card.date?.split(".") || [];
          const year = parts[0] ? `20${parts[0]}` : "-";
          const month = parts[1] || "-";
          const day = parts[2] || "-";

          return (
            <KeywordCard
              key={card.label}
              onClick={() => setSelectedKeyword(card.label)}
            >
              <CardTop>
                <CardLabel>{card.label}</CardLabel>
                <CardTopRight number={card.num} />
              </CardTop>
              <CardBottom>
                <UpdateYear>{year}년</UpdateYear>
                <UpdateMonthDay>{month}월 {day}일</UpdateMonthDay>
              </CardBottom>
            </KeywordCard>
          );
        })}
      </CardGrid>

      {/* ⭐ ReminderPopup에 mentorType 전달 */}
      {selectedKeyword && (
        <ReminderPopup
          keyword={selectedKeyword}       // ⭐ 추가됨
          onClose={() => setSelectedKeyword(null)}
        />
      )}

      {showBingoPopup && (
        <BingoPopup onClose={() => setShowBingoPopup(false)} />
      )}
    </StyledDict>
  );
};

export default Dict;
