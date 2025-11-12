import React from 'react';

interface MessageBubbleProps {
  message: string;
  isUser?: boolean;
  style?: React.CSSProperties;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({
  message,
  isUser = false,
  style,
}) => {
  const bubbleStyle: React.CSSProperties = {
    backgroundColor: isUser ? '#7d4ddd' : '#cbd3e3',
    borderRadius: isUser ? '20px 20px 0 20px': "0px 20px 20px 20px",
    padding: '10px',
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Nunito, Noto Sans KR',
    fontWeight: 'medium',
    fontSize: isUser ? '15px' : '15px',
    lineHeight: '1.4',
    color: isUser ? '#ffffff' : '#000000',
    alignSelf: isUser ? "flex-end" : "flex-start",
    textTransform: 'none',
    letterSpacing: '0.2px',
    whiteSpace: 'pre-wrap',
    ...style,
  };

  return <div style={bubbleStyle}>{message}</div>;
};

export default MessageBubble;

