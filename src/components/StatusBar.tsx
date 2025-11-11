import React from 'react';

interface StatusBarProps {
  time?: string;
}

const StatusBar: React.FC<StatusBarProps> = ({ time = '9:41' }) => {
  return (
    <div
      style={{
        position: 'absolute',
        height: '62px',
        left: 0,
        top: 0,
        width: '100%',
        backgroundColor: '#606cf2',
      }}
    >
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          gap: '154px',
          inset: 0,
          alignItems: 'center',
          justifyContent: 'center',
          padding: '21px 16px 19px',
        }}
      >
        <div
          style={{
            flex: '1 1 0',
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            justifyContent: 'center',
            height: '22px',
            paddingTop: '2px',
          }}
        >
          <p
            style={{
              fontFamily: 'SF Pro',
              fontWeight: 590,
              fontSize: '17px',
              lineHeight: '22px',
              color: '#ffffff',
              textAlign: 'center',
              whiteSpace: 'pre',
            }}
          >
            {time}
          </p>
        </div>
        <div
          style={{
            flex: '1 1 0',
            display: 'flex',
            gap: '7px',
            alignItems: 'center',
            justifyContent: 'center',
            height: '22px',
            paddingTop: '1px',
          }}
        >
          {/* 아이콘들은 이미지로 대체 가능 */}
          <div style={{ width: '19.2px', height: '12.226px' }} />
          <div style={{ width: '17.142px', height: '12.328px' }} />
          <div style={{ width: '27.328px', height: '13px' }} />
        </div>
      </div>
    </div>
  );
};

export default StatusBar;

