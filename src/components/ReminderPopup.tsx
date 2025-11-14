import React from "react";
import styled from "styled-components";
import kiwoomeBot from "../assets/img/kiwoome.png";
import crossIcon from "../assets/img/cross.png";
import VeteranHead from "../assets/img/veteran_head.png";

/**
 * DB에서 mentor 데이터가 들어오면
 * 이 컴포넌트에서는 mentorType, mentorName, iconSrc 등이 동적으로 반영될 예정
 * 현재는 피그마 디자인 기반의 고정 틀만 구성
 */

interface ReminderPopupProps {
  keyword: string;
  onClose: () => void;
}

const ReminderPopup: React.FC<ReminderPopupProps> = ({ keyword, onClose }) => {
  const message = `매도란?\n매도란 보유하고 있는 주식이나 금융상품을 시장에 내다 파는 행위를 의미합니다.\n매도를 통해 투자자는 보유 자산을 현금화하거나 손실을 줄일 수 있습니다.`;

  return (
    <Overlay>
      <PopupContainer>
        <WhiteCard>
          {/* 🧠 캐릭터 아이콘 + 이름 (DB 반영용 틀) */}
          <MentorInfo>
            <MentorHeadImg src={VeteranHead} alt="멘토 아이콘" />
            <MentorName>베테랑 멘토</MentorName>
          </MentorInfo>

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

/* ============================ Styled Components ============================ */

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
  overflow: hidden;
  z-index: 10;
`;

const MentorInfo = styled.div`
  position: absolute;
  top: 135px;
  left: 18px;
  display: flex;
  align-items: center;
  gap: 3px;
  z-index: 30;
`;

const MentorHeadImg = styled.img`
  width: 25px;
  height: 25px;
  object-fit: contain;
`;

const MentorName = styled.span`
  font-family: "SF Pro", sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #4a4a4a;
  line-height: 1;
  margin-top: -0.5px;
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
  margin-bottom: 40px;
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
  padding-top: 5px;
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
  white-space: nowrap;
  margin-top:30px;
  margin-left:30px;
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
`;

const MessageText = styled.p`
  margin: 0;
  white-space: pre-line;
`;