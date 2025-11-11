import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  style,
}) => {
  const baseStyle: React.CSSProperties = {
    backgroundColor: variant === 'primary' ? '#606cf2' : '#cbd3e3',
    border: 'none',
    borderRadius: '100px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '18px 16px',
    fontFamily: 'Nunito, Noto Sans KR',
    fontWeight: 'black',
    fontSize: '20px',
    lineHeight: '1.4',
    color: variant === 'primary' ? '#ffffff' : '#000000',
    textTransform: 'uppercase',
    letterSpacing: '0.2px',
    ...style,
  };

  return (
    <button onClick={onClick} style={baseStyle}>
      {children}
    </button>
  );
};

export default Button;

