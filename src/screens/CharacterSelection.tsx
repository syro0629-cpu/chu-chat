import React, { useState } from 'react';
import StatusBar from '../components/StatusBar';
import HeaderBar from '../components/HeaderBar';
import Button from '../components/Button';

interface CharacterSelectionProps {
  type: 'beginner' | 'veteran';
  onSelect?: () => void;
  onSkip?: () => void;
  onBack?: () => void;
}

const CharacterSelection: React.FC<CharacterSelectionProps> = ({
  type,
  onSelect,
  onSkip,
  onBack,
}) => {
  const [currentType, setCurrentType] = useState(type);

  const handlePrev = () => {
    setCurrentType(currentType === 'beginner' ? 'veteran' : 'beginner');
  };

  const handleNext = () => {
    setCurrentType(currentType === 'beginner' ? 'veteran' : 'beginner');
  };

  const characterData = {
    beginner: {
      title: '입문자형',
      description: '투자, 아직도 어렵게 느껴지죠?\n같이 차근차근 알아가요!\n제가 바로 당신의 첫 투자 멘토예요 🙌',
    },
    veteran: {
      title: '베테랑형',
      description: '투자, 수익률, 어떻게 느끼세요?\n제가 대신 분석해 드릴게요!\n제가 바로 당신의 투자 파트너예요 😊',
    },
  };

  const data = characterData[currentType];

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
      <HeaderBar title="일취월Chat" onBack={onBack} />

      {/* 캐릭터 이미지 영역 */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '250px',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '300px',
          backgroundColor: '#f0f0f0',
          borderRadius: '20px',
        }}
      />

      {/* 이전/다음 버튼 */}
      <button
        onClick={handlePrev}
        style={{
          position: 'absolute',
          left: '16px',
          top: '391px',
          width: '30px',
          height: '30px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        ←
      </button>
      <button
        onClick={handleNext}
        style={{
          position: 'absolute',
          right: '16px',
          top: '391px',
          width: '30px',
          height: '30px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        →
      </button>

      {/* 타이틀 */}
      <p
        style={{
          position: 'absolute',
          left: '50%',
          top: '173px',
          transform: 'translateX(-50%)',
          fontFamily: 'SF Pro',
          fontWeight: 'bold',
          fontSize: '40px',
          color: '#606cf2',
          textAlign: 'center',
        }}
      >
        {data.title}
      </p>

      {/* 설명 */}
      <div
        style={{
          position: 'absolute',
          left: '29px',
          top: '577px',
          width: '350px',
          backgroundColor: '#cbd3e3',
          borderRadius: '30px',
          padding: '20px',
        }}
      >
        <p
          style={{
            fontFamily: 'SF Pro',
            fontWeight: 590,
            fontSize: '17px',
            lineHeight: '30px',
            color: '#000000',
            textAlign: 'center',
            whiteSpace: 'pre-line',
          }}
        >
          {data.description}
        </p>
      </div>

      {/* 선택하기 버튼 */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '733px',
          transform: 'translateX(-50%)',
          width: '345px',
        }}
      >
        <Button onClick={onSelect}>선택하기</Button>
      </div>

      {/* 건너뛰기 버튼 */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '797px',
          transform: 'translateX(-50%)',
          width: '345px',
        }}
      >
        <Button variant="secondary" onClick={onSkip}>
          건너뛰기
        </Button>
      </div>
    </div>
  );
};

export default CharacterSelection;

