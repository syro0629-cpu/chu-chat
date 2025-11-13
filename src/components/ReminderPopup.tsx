import React from "react";
import styled from "styled-components";
import kiwoomeBot from "../assets/img/kiwoome.png";
import crossIcon from "../assets/img/cross.png";

interface ReminderPopupProps {
  keyword: string;
  onClose: () => void;
}

const ReminderPopup: React.FC<ReminderPopupProps> = ({ keyword, onClose }) => {
  const messages: Record<string, string> = {
    매도: `매도란?
매도란 보유하고 있는 주식이나 금융상품을
시장에 내다 파는 행위를 의미합니다.
매도를 통해 투자자는 보유 자산을 현금화하거나
손실을 줄일 수 있습니다.
키움증권의 영웅문 시스템을 통해 쉽게 매도 주문
가능하며, 매도 시점과 가격에 따라 투자 수익이
결정됩니다.
매도는 투자에서 중요한 거래 행위 중 하나로,
시장 상황과 투자 전략에 따라 적절한 시점에
이루어져야 합니다.`,
  };

  const message = messages[keyword] || `${keyword}에 대한 정보입니다.`;

  return (
    <Overlay>
      <PopupContainer>
        <WhiteCard>
          <BackgroundBotImage src={kiwoomeBot} alt="키우미봇 배경" />

          <Content>
            <Header>
              <HeaderLeft>
                <Title>{keyword}</Title>
                <DateText>2025.11.10</DateText>
              </HeaderLeft>

              <HeaderRight>
                <CloseBtn onClick={onClose}>
                  <CloseIconImg src={crossIcon} alt="닫기" />
                </CloseBtn>
                <UserBubble>{keyword}에 대해 알고 싶어</UserBubble>
              </HeaderRight>
            </Header>

            <ChatSection>
              <MsgBubble>
                {message.split("\n").map((line, i) => (
                  <MessageText key={i}>{line}</MessageText>
                ))}
              </MsgBubble>
            </ChatSection>
          </Content>
        </WhiteCard>

        <PurpleBorder />
      </PopupContainer>
    </Overlay>
  );
};

export default ReminderPopup;

/* ============================
  Styled Components
============================ */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

const PopupContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WhiteCard = styled.div`
  position: relative;
  width: 339px;
  height: 500px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 20px 50px -10px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  z-index: 10;
`;

const BackgroundBotImage = styled.img`
  position: absolute;
  width: 290px;
  height: 290px;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.35;
  pointer-events: none;
  z-index: 2;
  object-fit: contain;
  filter: blur(1.2px);
`;

const PurpleBorder = styled.div`
  position: absolute;
  width: 326px;
  height: 490px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 0.5px solid #1b0c8b;
  border-radius: 20px;
  pointer-events: none;
  z-index: 20;
`;

const Content = styled.div`
  position: relative;
  z-index: 5;
  padding: 20px 18px 20px 16px;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 12px;
  flex-shrink: 0;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  padding-left: 8px;
`;

const HeaderRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 14px;
  flex-shrink: 0;
  padding-top: 6px;
`;

const Title = styled.div`
  font-family: "SF Pro", sans-serif;
  font-weight: 510;
  font-size: 18px;
  color: #000000;
`;

const DateText = styled.div`
  font-family: "SF Pro", sans-serif;
  font-weight: 510;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
`;

const CloseIconImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const UserBubble = styled.div`
  background: #7d4ddd;
  border-radius: 20px;
  color: #ffffff;
  font-size: 10px;
  padding: 8px 14px;
  font-family: "Nunito", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  white-space: nowrap;
`;

const ChatSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

const MsgBubble = styled.div`
  width: fit-content;
  max-width: 295px;
  background: #cbd3e3;
  border-radius: 20px;
  padding: 12px 14px;
  font-size: 13px;
  color: #000;
  line-height: 1.5;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  word-break: keep-all;
`;

const MessageText = styled.p`
  margin: 0;
  white-space: pre-line;
  word-break: keep-all;
`;
