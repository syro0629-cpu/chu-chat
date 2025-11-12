import React, { useState, useRef, useEffect } from 'react';
import StatusBar from '../components/StatusBar';
import HeaderBar from '../components/HeaderBar';
import MessageBubble from '../components/MessageBubble';
import ChildHead from "../assets/img/child_head.png";
import VeteranHead from "../assets/img/veteran_head.png";
import Dict from "../assets/img/dict_icon.png";
import MessageIcon from "../assets/img/message_icon.png";

interface ChatProps {
  selectedType: "beginner" | "veteran" ;
  onBack?: () => void;
  onViewDict?: () => void;
}

const Chat: React.FC<ChatProps> = ({ selectedType, onBack, onViewDict }) => {
  const profileImg = selectedType === "beginner" ? ChildHead : VeteranHead;
  const profileName = selectedType === "beginner" ? "입문자 키우Me" : "베테랑 키우Me"
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
        <img 
          src={Dict}
          alt=""
          style = {{width:"20px", height:"20px"}}/>
        <p
          style={{
            fontFamily: 'Gabarito, Noto Sans KR',
            fontWeight: 'semibold',
            fontSize: '10px',
            color: '#a9a9a9',
          }}
        >
          도감
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
          paddingTop:"100px",
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          scrollBehavior:"smooth"
        }}
      >
        {messages.map((message, idx) => (
          <div key={message.id}>
            {/*챗봇 프로필*/}
            {!message.isUser && (idx === 0 || messages[idx -1].isUser) && (
              <div
              style={{
                display:"flex",
                alignItems:"center",
                gap:"5px",
                marginBottom:"6px"
              }}>
                <img
                  src={profileImg}
                  alt=""
                  style={{width:"60px", height:"60px", objectFit:"cover"}}/>
                <span style={{
                  fontFamily: "Gabarito, Noto sans KR",
                  fontWeight:600,
                  fontSize:"13px",
                  color:"#000000"
                }}>
                  {profileName}
                </span>
              </div>
            )}
            {/*말풍선*/}
            <div style={{
              display: 'flex',
              justifyContent: message.isUser ? 'flex-end' : 'flex-start',
              alignItems: 'flex-start',
              gap: '0px',
              marginLeft: message.isUser ? "0" : "-20px"
            }}
          >
              {!message.isUser && (
                <div
                  style={{width: '40px', flexShrink: 0,}}/>
              )}
              <MessageBubble
                message={message.text}
                isUser={message.isUser}
                style={{maxWidth: '280px',}}
              />
            </div>
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
        <div style={{
          flex:1,
          height:"40px",
          position:"relative",
          display:"flex",
          alignItems:"center",
          borderRadius:"30px",
          padding:"2px",
          background:"linear-gradient(90deg, #6F7BFF, #D6A2FF)"
        }}>
          <div style={{
            backgroundColor:"#ffffff",
            borderRadius:"30px",
            width:"100%",
            height:"100%",
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            padding:"8px 10px 8px 18px"
          }}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="키우Me에게 물어보세요"
              style={{
                flex: 1,
                fontFamily: 'ABeeZee, Noto Sans KR',
                fontSize: '14px',
                color: '#a9a9a9',
                outline: 'none',
                border:"none"
              }}
            />
            <button
              onClick={handleSend}
              style={{
                position:"absolute",
                right:"1px",
                width: '36px',
                height: '36px',
                background: "linear-gradient(135deg, #6F7BFF, #9BA5FF, #A4E2CE)",
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
              <img 
                src={MessageIcon}
                alt=""
                style={{
                  width:"40px", 
                  height:"40px", 
                  objectFit:"contain", 
                  transform:"translate(4px, -3px)",
                  }}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

