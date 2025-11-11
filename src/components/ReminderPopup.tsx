import React from 'react';
import MessageBubble from './MessageBubble';

interface ReminderPopupProps {
  keyword: string;
  onClose: () => void;
}

const ReminderPopup: React.FC<ReminderPopupProps> = ({ keyword, onClose }) => {
  const messages: { [key: string]: string } = {
    '매도': '매도란?\n매도란 보유하고 있는 주식이나 금융상품을\n시장에 내다 파는 행위를 의미합니다.\n매도를 통해 투자자는 보유 자산을 현금화하거나\n손실을 줄일 수 있습니다.\n키움증권의 영웅문 시스템을 통해 쉽게 매도 주문\n가능하며, 매도 시점과 가격에 따라 투자 수익이\n결정됩니다.\n매도는 투자에서 중요한 거래 행위 중 하나로,\n시장 상황과 투자 전략에 따라 적절한 시점에\n이루어져야 합니다.',
    '배당': '배당이란 기업이 보유주주에게 이익의 일부를 현금이나 주식으로 지급하는 것을 의미합니다.',
    'ETF': 'ETF는 Exchange Traded Fund의 약자로, 주식처럼 거래소에서 거래되는 펀드입니다.',
    'S&P 500': 'S&P 500은 미국의 대표적인 주식 시장 지수로, 500개의 대형 기업을 포함합니다.',
    '나스닥': '나스닥은 미국의 기술주 중심 주식 시장입니다.',
    'PER': 'PER은 주가수익비율로, 주가를 주당순이익으로 나눈 값입니다.',
    'EPS': 'EPS는 주당순이익으로, 기업의 순이익을 발행주식수로 나눈 값입니다.',
    '배당수익률': '배당수익률은 연간 배당금을 주가로 나눈 비율입니다.',
    '시가총액': '시가총액은 주가에 발행주식수를 곱한 값으로 기업의 총 가치를 나타냅니다.',
  };

  const message = messages[keyword] || `${keyword}에 대한 정보입니다.`;

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
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#f0f0f0',
                borderRadius: '50%',
              }}
            />
            <p
              style={{
                fontFamily: 'SF Pro',
                fontWeight: 510,
                fontSize: '18px',
                color: '#000000',
              }}
            >
              {keyword}
            </p>
          </div>
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

        {/* 메시지 영역 (스크롤 가능) */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '10px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#f0f0f0',
                  borderRadius: '50%',
                  flexShrink: 0,
                }}
              />
              <MessageBubble
                message={message}
                isUser={false}
                style={{
                  maxWidth: '220px',
                  fontSize: '10px',
                }}
              />
            </div>
          </div>
        </div>

        {/* 네비게이션 버튼 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '10px',
          }}
        >
          <button
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '20px',
              color: '#a9a9a9',
            }}
          >
            ←
          </button>
          <button
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '20px',
              color: '#a9a9a9',
            }}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReminderPopup;

