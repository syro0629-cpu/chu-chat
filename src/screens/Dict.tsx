import React, { useState } from 'react';
import StatusBar from '../components/StatusBar';
import HeaderBar from '../components/HeaderBar';
import DictCard from '../components/DictCard';
import ReminderPopup from '../components/ReminderPopup';
import BingoPopup from '../components/BingoPopup';

interface DictProps {
  onBack?: () => void;
}

const Dict: React.FC<DictProps> = ({ onBack }) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [showReminder, setShowReminder] = useState(false);
  const [showBingo, setShowBingo] = useState(false);
  const [reminderKeyword, setReminderKeyword] = useState('');

  const keywords = [
    { id: '1', title: 'S&P 500', subtitle: 'ETF', date: '2025.11.10', count: 7, position: { top: '214px', left: '8.76px' } },
    { id: '2', title: 'ETF', date: '2025.11.11', count: 3, position: { top: '214px', left: '199.54px' } },
    { id: '3', title: '나스닥', subtitle: 'PBR', date: '2025.11.10', count: 4, position: { top: '386px', left: '8.76px' } },
    { id: '4', title: 'PER', date: '2025.11.10', position: { top: '386px', left: '199.54px' } },
    { id: '5', title: 'EPS', date: '2025.11.10', count: 9, position: { top: '558px', left: '9.73px' } },
    { id: '6', title: '배당수익률', date: '2025.11.10', count: 1, position: { top: '558px', left: '199.54px' } },
    { id: '7', title: '시가총액', date: '2025.11.10', count: 8, position: { top: '730px', left: '9.73px' } },
    { id: '8', title: '매도', date: '2025.11.10', count: 8, position: { top: '730px', left: '199.54px' } },
  ];

  const handleCardClick = (keyword: string) => {
    setReminderKeyword(keyword);
    setShowReminder(true);
  };

  const handleBingoClick = () => {
    setShowBingo(true);
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '402px',
        height: '874px',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
      }}
    >
      <StatusBar />
      <HeaderBar title="키우Me 도감" onBack={onBack} />

      {/* 도감 아이콘 버튼 */}
      <button
        onClick={handleBingoClick}
        style={{
          position: 'absolute',
          right: '14px',
          top: '145px',
          width: '50px',
          height: '50px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        🎯
      </button>

      {/* 제목 */}
      <p
        style={{
          position: 'absolute',
          left: '50%',
          top: '157px',
          transform: 'translateX(-50%)',
          fontFamily: 'Nunito, Noto Sans KR',
          fontWeight: 'semibold',
          fontSize: '24px',
          color: '#000000',
          textAlign: 'center',
        }}
      >
        키워드별 질문 확인하기
      </p>

      {/* 카드 그리드 영역 (스크롤 가능) */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: '120px',
          width: '402px',
          height: '756px',
          backgroundColor: '#f7f7f7',
          borderRadius: '3px',
          overflowY: 'auto',
          padding: '20px 10px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '10px',
            position: 'relative',
          }}
        >
          {keywords.map((keyword) => (
            <div
              key={keyword.id}
              style={{
                position: 'relative',
                width: '182.993px',
                height: '73px',
              }}
            >
              <DictCard
                title={keyword.title}
                subtitle={keyword.subtitle}
                date={keyword.date}
                count={keyword.count}
                isSelected={selectedCard === keyword.id}
                onClick={() => {
                  setSelectedCard(keyword.id);
                  handleCardClick(keyword.title);
                }}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Reminder 팝업 */}
      {showReminder && (
        <ReminderPopup
          keyword={reminderKeyword}
          onClose={() => setShowReminder(false)}
        />
      )}

      {/* Bingo 팝업 */}
      {showBingo && (
        <BingoPopup onClose={() => setShowBingo(false)} />
      )}
    </div>
  );
};

export default Dict;

