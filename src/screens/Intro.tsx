import React from 'react';
import StatusBar from '../components/StatusBar';
import HeaderBar from '../components/HeaderBar';
import Button from '../components/Button';

interface IntroProps {
  onSelectCharacter?: () => void;
  onViewDict?: () => void;
}

const Intro: React.FC<IntroProps> = ({ onSelectCharacter, onViewDict }) => {
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
      <HeaderBar title="일취월Chat" />

      {/* 친밀도 */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '191px',
          transform: 'translateX(-50%)',
          width: '100px',
          height: '40px',
          border: '1px solid #cbd3e3',
          borderRadius: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
        }}
      >
        <span style={{ fontSize: '24px' }}>❤️</span>
        <p style={{ fontFamily: 'Nunito', fontWeight: 'bold', fontSize: '24px' }}>0</p>
      </div>

      {/* 챗봇 이미지 */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '240px',
          transform: 'translateX(-50%)',
          width: '177px',
          height: '177px',
          backgroundColor: '#f0f0f0',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '100px',
        }}
      >
        🤖
      </div>

      {/* 버튼들 */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '391px',
          transform: 'translateX(-50%)',
          width: '345px',
        }}
      >
        <Button onClick={onSelectCharacter} style={{ width: '100%', minHeight: '64px' }}>채팅 바로가기</Button>
      </div>

      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '488px',
          transform: 'translateX(-50%)',
          width: '345px',
        }}
      >
        <Button onClick={onSelectCharacter} style={{ width: '100%', minHeight: '64px' }}>키우Me 선택하기</Button>
      </div>

      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '585px',
          transform: 'translateX(-50%)',
          width: '345px',
        }}
      >
        <Button onClick={onViewDict} style={{ width: '100%', minHeight: '64px' }}>도감 보기</Button>
      </div>
    </div>
  );
};

export default Intro;

