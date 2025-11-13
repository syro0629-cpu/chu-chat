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
  onClose?: () => void;
  onViewDict?: () => void;
}

const Chat: React.FC<ChatProps> = ({ selectedType, onBack, onClose, onViewDict }) => {
  const profileImg = selectedType === "beginner" ? ChildHead : VeteranHead;
  const profileName = selectedType === "beginner" ? "입문자 멘토" : "베테랑 멘토";
  const initialMessage = selectedType === "beginner"
  ? "안녕하세요!\n저는 입문자 멘토입니다." : "안녕하세요!\n저는 베테랑 멘토입니다.";
  
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: initialMessage,
      isUser: false,
    }
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
      <HeaderBar title="일취월챗" onBack={onBack} onClose={onClose} />

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
          zIndex: 10,
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
                  style={{width:"50px", height:"50px", objectFit:"cover"}}/>
                <span style={{
                  fontFamily: "Gabarito, Noto sans KR",
                  fontWeight:500,
                  fontSize:"12px",
                  color:"#000000",
                  marginTop:"5px"
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
              marginLeft: message.isUser ? "0" : "-15px"
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
        }}
      >
        <div style={{
          flex:1,
          height:"40px",
          display:"flex",
          alignItems:"center",
          justifyContent:"space-between",
          borderRadius:"30px",
          border:"1.2px solid transparent",
          padding:"0 0 0 12px",
          background:"linear-gradient(#fff, #fff) padding-box,linear-gradient(90deg, #6F7BFF, #D6A2FF) border-box",
          backgroundOrigin:"padding-box, border-box",
          backgroundClip:"padding-box, border-box",
          boxSizing:"border-box"
        }}>
          {/*input box */}
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
                color: '#000000',
                outline: 'none',
                border:"none",
                paddingRight:"10px"
              }}
            />
            <button
              onClick={handleSend}
              style={{
                width: '36px',
                height: '38px',
                background: "linear-gradient(135deg, #6F7BFF, #9BA5FF, #A4E2CE)",
                border: 'none',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img 
                src={MessageIcon}
                alt=""
                style={{
                  width:"36px", 
                  height:"36px", 
                  objectFit:"contain",
                  marginRight:"-7px",
                  marginTop:"-4px"
                  }}/>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;

