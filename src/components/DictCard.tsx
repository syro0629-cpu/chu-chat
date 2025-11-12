import React from "react";
import styled from "styled-components";

/* 카드 상단 오른쪽 숫자 + 화살표 컨테이너 */
const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  position: absolute;
  right: 16px;
  top: 28px;
`;

/* 숫자 스타일 */
const NumberText = styled.span`
  font-family: "SF Pro", sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #6b6b6b;
`;

/* 화살표 SVG */
const Arrow = styled.svg`
  width: 5px;
  height: 9px;
`;

export const CardTopRight: React.FC<{ number: string }> = ({ number }) => {
  return (
    <RightWrapper>
      <NumberText>{number}</NumberText>
      <Arrow viewBox="0 0 5 9" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 1L4 4.5L1 8"
          stroke="#6B6B6B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Arrow>
    </RightWrapper>
  );
};