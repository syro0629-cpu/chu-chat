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
  messages: any[];
  setMessages: (msgs: any[]) => void;
  onBack?: () => void;
  onClose?: () => void;
  onViewDict?: () => void;
}

const Chat: React.FC<ChatProps> = ({ 
  selectedType,
  messages,
  setMessages, 
  onBack, 
  onClose, 
  onViewDict }) => {
  const profileImg = selectedType === "beginner" ? ChildHead : VeteranHead;
  const profileName = selectedType === "beginner" ? "루키" : "마스터";
  const initialMessage = selectedType === "beginner"
  ? "반가워요! 편하게 질문해 주세요.\n\n작은 궁금증도 같이 풀어가면, 어느새 투자 감각이 자라날 거에요\n오늘은 어떤 걸 도와드릴까요?" 
  : "안녕하세요.\n\n오늘은 어떤 영역을 분석해 드릴까요?\n최신 데이터와 시장 흐름을 기반으로, 바로 활용 가능한 인사이트를 제시하겠습니다.";
  
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{
        id:1,
        text: initialMessage,
        isUser: false
      }]);
    }
  }, []);
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

      {/* 메시지 영역 (스크롤 가능) */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: '80px',
          width: '402px',
          height: 'calc(100% - 140px)',
          overflowY: 'scroll',
          padding: '0px 20px',
          paddingTop:"70px",
          paddingBottom:"10px",
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          scrollBehavior:"smooth",
          msOverflowStyle:"none",
          scrollbarWidth:"none",
          scrollbarColor:"bfbfbf transparent"

        }}
      >
        {/*유의사항-스크롤되며 위로 사라짐*/}
        <div style={{textAlign:"center", marginBottom:"10px"}}>
          <strong style={{
            color: "#666666",
            fontSize:"12px", 
            fontWeight:500}}>
              일취월챗 이용 유의사항
          </strong>
          <div style={{
            marginTop:"5px", 
            fontSize: "11px", 
            color:"#666666",
            lineHeight:"15px"}}> 
            일취월챗의 답변은 생성형 AI를 활용한 답변으로 사실과 다를 수 있어요.
          </div> 
        </div>
        {/*대화 시작 날짜*/}
        <div style = {{
          display:"inline-flex",
          justifyContent:"center",
          alignItems:"center",
          alignSelf:"center",
          background:"#c6c6c6",
          padding:"6px 10px",
          borderRadius:"30px",
          fontSize:"12px",
          fontWeight:700,
          color:"#ffffff",
          marginBottom:"10px"
        }}>
          {new Date().toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day:"2-digit"
          }).replace(/\. /g, '.').replace(/\.$/,'')}
        </div>

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
                <div style={{width: '40px', flexShrink: 0}} />)}
              <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
                {message.text
                  .split(/\n\s*\n/)
                  .map((chunk: string,bIndex:number) => (
                    <MessageBubble
                    key={`${message.id}-${bIndex}`}
                    message={chunk.trim()}
                    isUser={message.isUser}
                    style={{maxWidth:"280px"}}/>
                  ))}
            </div>
          </div>
          {messages.length === 1 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                justifyContent: "flex-start",
                marginLeft:"25px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              {["공매도가 뭐야", "키움증권 현재 주가 어때"].map((text, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setMessages([
                      ...messages,
                      { id: messages.length + 1, text, isUser: true },
                    ])
                  }
                  style={{
                    background: "#ffffff",
                    border: "2px solid #cbd3e3",
                    borderRadius: "30px",
                    padding: "6px 10px",
                    fontSize: "12px",
                    fontWeight: "500",
                    cursor: "pointer",
                    color: "#000000",
                  }}
                >
                  {text}
                </button>
              ))}
      </div>
    )}
          
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
          gap:"10px"
        }}
      >
        {/*도감버튼*/}
        <button
          onClick={onViewDict}
          style={{
            width: '39px',
            height: '35px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent:"center",
            gap: '2px',
            flexDirection:"column",
            whiteSpace:"nowrap",
            marginLeft:"-10px",
            marginTop:"8px"
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
        <div style={{
          flex:1,
          height:"40px",
          display:"flex",
          alignItems:"center",
          borderRadius:"30px",
          border:"1.2px solid transparent",
          padding:"0 6px 0 14px",
          background:"linear-gradient(#fff, #fff) padding-box,linear-gradient(90deg, #6F7BFF, #D6A2FF) border-box",
          backgroundOrigin:"padding-box, border-box",
          backgroundClip:"padding-box, border-box",
          boxSizing:"border-box",
          gap:"0px"
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
                paddingLeft:"5px",
                paddingRight:"5px"
              }}
            />

            {/*전송버튼*/}
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
                marginRight:"-6px"
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

