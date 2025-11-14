import React, { useState } from "react";
import styled from "styled-components";
import stampImage from "../assets/img/stamp.png";

const BingoPopup: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  const [bingoGrid] = useState([
    ["?", "ETF", "?"], 
    ["?", "S&P 500", "?"], 
    ["?", "나스닥", "?"], 
  ]);

  const [completedCells] = useState<Set<string>>(new Set(["0,1", "1,1", "2,1"]));

  const isPurpleCell = (row: number, col: number) => (row + col) % 2 === 0;

  const getCellContent = (row: number, col: number) => {
    const key = `${row},${col}`;
    const isStamped = completedCells.has(key);
    const isPurple = isPurpleCell(row, col);

    if (isStamped) {
      if (row === 1 && col === 1) {
        return (
          <StampedCellWrapper>
            <StampedText $isPurple={true}>
              <StampedTextLine $isPurple={true}>S&P</StampedTextLine>
              <StampedTextLine $isPurple={true}>500</StampedTextLine>
            </StampedText>
            <StampImageLayer>
              <StampImg src={stampImage} alt="stamp" />
            </StampImageLayer>
          </StampedCellWrapper>
        );
      }

      if (row === 0 && col === 1) {
        return (
          <StampedCellWrapper>
            <StampedSingleText $isPurple={false}>ETF</StampedSingleText>
            <StampImageLayer>
              <StampImg src={stampImage} alt="stamp" />
            </StampImageLayer>
          </StampedCellWrapper>
        );
      }

      if (row === 2 && col === 1) {
        return (
          <StampedCellWrapper>
            <StampedSingleText $isPurple={false}>나스닥</StampedSingleText>
            <StampImageLayer>
              <StampImg src={stampImage} alt="stamp" />
            </StampImageLayer>
          </StampedCellWrapper>
        );
      }
    }

    if (isPurple) return <QuestionMark>?</QuestionMark>;
    return <QuestionMarkWhite>?</QuestionMarkWhite>;
  };

  return (
    <Overlay onClick={onClose}>
      <PopupWrapper onClick={(e) => e.stopPropagation()}>
        <OuterFrame>
          <InnerContainer>
            <ContentBorder>
              {onClose && <CloseButton onClick={onClose}>✕</CloseButton>}

              <Header>
                <KiwooMeBingo>
                  <BoldLetter>K</BoldLetter>
                  <MediumBoldLetter>i</MediumBoldLetter>
                  <BoldLetter>w</BoldLetter>
                  <MediumBoldLetter>o</MediumBoldLetter>
                  <MediumBoldLetter>o</MediumBoldLetter>
                  <BoldLetter>M</BoldLetter>
                  <MediumBoldLetter>e</MediumBoldLetter>
                  <Space />
                  <BoldLetter>B</BoldLetter>
                  <MediumBoldLetter>i</MediumBoldLetter>
                  <BoldLetter>n</BoldLetter>
                  <MediumBoldLetter>g</MediumBoldLetter>
                  <MediumBoldLetter>o</MediumBoldLetter>
                </KiwooMeBingo>

                <Subtitle>빙고 완성하고 선물 받자!</Subtitle>
              </Header>

              <Grid>
                {bingoGrid.map((row, rowIdx) =>
                  row.map((_, colIdx) => {
                    const isPurple = isPurpleCell(rowIdx, colIdx);
                    return (
                      <Cell key={`${rowIdx}-${colIdx}`} $isPurple={isPurple}>
                        {getCellContent(rowIdx, colIdx)}
                      </Cell>
                    );
                  })
                )}
              </Grid>
            </ContentBorder>
          </InnerContainer>
        </OuterFrame>
      </PopupWrapper>
    </Overlay>
  );
};

export default BingoPopup;

/* ---------------- Styled Components ---------------- */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

const PopupWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OuterFrame = styled.div`
  position: relative;
  width: 326px;
  height: 423px;
  border: 0.5px solid #1b0c8b;
  border-radius: 20px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

const InnerContainer = styled.div`
  position: absolute;
  width: 339px;
  height: 433px;
  top: -5px;
  left: -6.5px;
  background: #ffffff;
  border-radius: 20px;
  padding: 12px 8px;
  box-shadow: 0px 20px 50px -10px rgba(0, 0, 0, 0.15);
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentBorder = styled.div`
  width: 100%;
  height: 100%;
  border: 1.5px solid #1b0c8b;
  border-radius: 12px;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 3px;
  right: 10px;
  background: none;
  border: none;
  font-size: 22px;
  color: #929090;
  cursor: pointer;
  z-index: 20;

  &:hover {
    color: #1b0c8b;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const KiwooMeBingo = styled.p`
  font-family: "Calistoga", serif;
  font-size: 36px;
  margin: 0 0 8px 0;
  display: flex;
`;

const BoldLetter = styled.span`
  font-weight: 900;
  font-size: 36px;
  background: linear-gradient(180deg, #0e2170, #1d4af0);
  -webkit-background-clip: text;
  color: transparent;
`;

const MediumBoldLetter = styled(BoldLetter)`
  font-weight: 900;
`;

const Space = styled.span`
  width: 6px;
  display: inline-block;
`;

const Subtitle = styled.p`
  font-family: "Gabarito", "Noto Sans KR";
  font-size: 16px;
  margin-top: -6px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const Cell = styled.div<{ $isPurple: boolean }>`
  width: 85px;
  height: 85px;
  border-radius: 10px;
  background: ${(p) => (p.$isPurple ? "#606cf2" : "#fff")};
  border: 2px solid ${(p) => (p.$isPurple ? "rgba(29,16,127,0.3)" : "#AFD7FC")};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const QuestionMark = styled.p`
  font-size: 24px;
  color: #fff;
`;

const QuestionMarkWhite = styled.p`
  font-size: 24px;
  color: #1c1c1c;
`;

const StampedCellWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StampImageLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StampImg = styled.img`
  width: 75px;
  height: 75px;
  opacity: 0.6;
  filter: blur(1px);
`;

const StampedText = styled.div<{ $isPurple: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
`;

const StampedTextLine = styled.p<{ $isPurple: boolean }>`
  font-size: 18px;
  font-weight: 800;
  color: ${(p) => (p.$isPurple ? "#fff" : "#1b0c8b")};
  opacity: 0.5;
  filter: blur(0.5px);
`;

const StampedSingleText = styled.p<{ $isPurple: boolean }>`
  font-size: 18px;
  font-weight: 800;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(p) => (p.$isPurple ? "#fff" : "#1b0c8b")};
  opacity: 0.5;
  filter: blur(0.5px);
  white-space: nowrap;
`;
