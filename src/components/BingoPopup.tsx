import React, { useState } from 'react';
import BingoCell from './BingoCell';

interface BingoPopupProps {
  onClose: () => void;
}

const BingoPopup: React.FC<BingoPopupProps> = ({ onClose }) => {
  const [bingoGrid, setBingoGrid] = useState([
    ['?', 'ETF', '?'],
    ['?', 'S&P 500', '?'],
    ['나스닥', '?', '?'],
  ]);

  const [completedCells, setCompletedCells] = useState<Set<string>>(
    new Set(['1,1', '1,0'])
  );

  const handleCellClick = (row: number, col: number) => {
    const key = `${row},${col}`;
    const newCompleted = new Set(completedCells);
    if (newCompleted.has(key)) {
      newCompleted.delete(key);
    } else {
      newCompleted.add(key);
    }
    setCompletedCells(newCompleted);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          width: '339px',
          height: '433px',
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          boxShadow: '0px 20px 50px -10px rgba(0, 0, 0, 0.15)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '10px',
          }}
        >
          <p
            style={{
              fontFamily: 'Calistoga',
              fontSize: '40px',
              background: 'linear-gradient(to bottom, #170d67, #2514a2 58.654%, #2f1acd)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center',
              flex: 1,
            }}
          >
            KiwooMe Bingo
          </p>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '24px',
              color: '#929090',
            }}
          >
            ✕
          </button>
        </div>

        <p
          style={{
            fontFamily: 'Gabarito, Noto Sans KR',
            fontWeight: 'normal',
            fontSize: '16px',
            color: '#1c1c1c',
            textAlign: 'center',
            textTransform: 'capitalize',
          }}
        >
          빙고 완성하고 선물 받자!
        </p>

        {/* 빙고 그리드 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px',
            padding: '20px',
            border: '0.5px solid #1b0c8b',
            borderRadius: '20px',
          }}
        >
          {bingoGrid.map((row, rowIdx) =>
            row.map((cell, colIdx) => (
              <BingoCell
                key={`${rowIdx}-${colIdx}`}
                text={cell}
                isCompleted={completedCells.has(`${rowIdx},${colIdx}`)}
                onClick={() => handleCellClick(rowIdx, colIdx)}
              />
            ))
          )}
        </div>

        {/* 선택 및 확인 버튼 */}
        <button
          style={{
            width: '100%',
            height: '48px',
            backgroundColor: '#606cf2',
            border: 'none',
            borderRadius: '30px',
            color: '#ffffff',
            fontFamily: 'SF Pro',
            fontWeight: 510,
            fontSize: '17px',
            cursor: 'pointer',
          }}
        >
          선택 및 확인
        </button>
      </div>
    </div>
  );
};

export default BingoPopup;

