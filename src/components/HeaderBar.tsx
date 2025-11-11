import React from 'react';

interface HeaderBarProps {
  title: string;
  onBack?: () => void;
  onClose?: () => void;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ title, onBack, onClose }) => {
  return (
    <div
      style={{
        position: 'absolute',
        height: '58px',
        left: '1px',
        top: '62px',
        width: '402px',
        backgroundColor: '#606cf2',
      }}
    >
      {onBack && (
        <button
          onClick={onBack}
          style={{
            position: 'absolute',
            left: '15px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            width: '11.179px',
            height: '18.966px',
          }}
        >
          ←
        </button>
      )}
      {onClose && (
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            right: '25px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#929090',
            fontSize: '17px',
          }}
        >
          ✕
        </button>
      )}
      <p
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'Nunito, Noto Sans KR',
          fontWeight: 'bold',
          fontSize: '20px',
          lineHeight: '22px',
          color: '#ffffff',
          textAlign: 'center',
          whiteSpace: 'pre',
          letterSpacing: '-0.43px',
        }}
      >
        {title}
      </p>
    </div>
  );
};

export default HeaderBar;

