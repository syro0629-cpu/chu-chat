import React, { useState, useRef, useEffect } from 'react';
import StatusBar from '../components/StatusBar';
import HeaderBar from '../components/HeaderBar';
import MessageBubble from '../components/MessageBubble';

interface ChatProps {
  onBack?: () => void;
  onViewDict?: () => void;
}

const Chat: React.FC<ChatProps> = ({ onBack, onViewDict }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: '매도에 대해 알고 싶어',
      isUser: true,
    },
    {
      id: 2,
      text: '매도란?\n매도란 보유하고 있는 주식이나 금융상품을\n시장에 내다 파는 행위를 의미합니다.\n매도를 통해 투자자는 보유 자산을 현금화하거나\n손실을 줄일 수 있습니다.\n키움증권의 영웅문 시스템을 통해 쉽게 매도 주문\n가능하며, 매도 시점과 가격에 따라 투자 수익이\n결정됩니다.\n매도는 투자에서 중요한 거래 행위 중 하나로,\n시장 상황과 투자 전략에 따라 적절한 시점에\n이루어져야 합니다.',
      isUser: false,
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          text: inputValue,
          isUser: true,
        },
      ]);
      setInputValue('');
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '402px',
        height: '874px',
        backgroundColor: '#e9effe',
        overflow: 'hidden',
      }}
    >
      <StatusBar />
      <HeaderBar title="일취월Chat" onBack={onBack} />

      {/* 도감 확인 버튼 */}
      <button
        onClick={onViewDict}
        style={{
          position: 'absolute',
          left: '10px',
          top: '132px',
          width: '39px',
          height: '35px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        <span style={{ fontSize: '24px' }}>📖</span>
        <p
          style={{
            fontFamily: 'Gabarito, Noto Sans KR',
            fontWeight: 'semibold',
            fontSize: '10px',
            color: '#a9a9a9',
          }}
        >
          도감확인
        </p>
      </button>

      {/* 메시지 영역 (스크롤 가능) */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: '120px',
          width: '402px',
          height: '694px',
          overflowY: 'auto',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              display: 'flex',
              justifyContent: message.isUser ? 'flex-end' : 'flex-start',
              alignItems: 'flex-start',
              gap: '10px',
            }}
          >
            {!message.isUser && (
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#f0f0f0',
                  borderRadius: '50%',
                  flexShrink: 0,
                }}
              />
            )}
            <MessageBubble
              message={message.text}
              isUser={message.isUser}
              style={{
                maxWidth: '280px',
              }}
            />
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* 입력창 */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '402px',
          height: '60px',
          backgroundColor: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          padding: '0 20px',
          gap: '10px',
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="키우Me에게 물어보세요"
          style={{
            flex: 1,
            border: '1px solid #6f7bff',
            borderRadius: '20px',
            padding: '10px 20px',
            fontFamily: 'ABeeZee, Noto Sans KR',
            fontSize: '14px',
            color: '#a9a9a9',
            outline: 'none',
          }}
        />
        <button
          onClick={handleSend}
          style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#606cf2',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontSize: '20px',
          }}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Chat;

