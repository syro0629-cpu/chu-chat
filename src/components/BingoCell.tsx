import React from 'react';

interface BingoCellProps {
  text: string;
  isCompleted?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const BingoCell: React.FC<BingoCellProps> = ({
  text,
  isCompleted = false,
  onClick,
  style,
}) => {
  const cellStyle: React.CSSProperties = {
    backgroundColor: isCompleted ? '#606cf2' : '#ffffff',
    border: `2px solid ${isCompleted ? 'rgba(25, 90, 148, 0.3)' : '#afd7fc'}`,
    borderRadius: '10px',
    width: '85px',
    height: '88px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: onClick ? 'pointer' : 'default',
    position: 'relative',
    ...style,
  };

  const textStyle: React.CSSProperties = {
    fontFamily: 'Gabarito, Noto Sans KR',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '1.2',
    color: isCompleted ? '#ffffff' : '#1c1c1c',
    textAlign: 'center',
    textTransform: 'capitalize',
  };

  return (
    <div onClick={onClick} style={cellStyle}>
      <p style={textStyle}>{text}</p>
    </div>
  );
};

export default BingoCell;

