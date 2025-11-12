import React, { useState } from 'react';
import StatusBar from '../components/StatusBar';
import HeaderBar from '../components/HeaderBar';
import Button from '../components/Button';
import ChildKiwoome from "../assets/img/child_chatbot.png";
import VeteranKiwoome from "../assets/img/veteran_chatbot.png";
import RightVector from "../assets/img/vector2.png";
import LeftVector from "../assets/img/vector3.png";


interface CharacterSelectionProps {
  onSelect?: (type: "beginner"|"veteran") => void;
  onBack?: () => void;
  onClose?: () => void;
}

const CharacterSelection: React.FC<CharacterSelectionProps> = ({
  onSelect,
  onBack,
  onClose,
}) => {const [currentType, setCurrentType] = useState<"beginner"|"veteran">("beginner");

  const handlePrev = () => {
    setCurrentType(currentType === 'beginner' ? 'veteran' : 'beginner');
  };

  const handleNext = () => {
    setCurrentType(currentType === 'beginner' ? 'veteran' : 'beginner');
  };

  const characterData = {
    beginner: {
      title: '입문자 멘토',
      description: '투자, 아직도 어렵게 느껴지죠?\n같이 차근차근 알아가요!\n제가 바로 당신의 첫 투자 멘토예요 🙌',
    },
    veteran: {
      title: '베테랑 멘토',
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
      <HeaderBar title="일취월챗" onBack={onBack} onClose={onClose} />

      {/* 캐릭터 이미지 영역 */}
      <img
        src={currentType === "beginner" ? ChildKiwoome : VeteranKiwoome}
        alt=""
        style={{
          position: 'absolute',
          left: '50%',
          top: '250px',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '300px',
          objectFit:"contain"
        }}
      />

      {/* 이전/다음 버튼 */}
      <button
        onClick={handlePrev}
        style={{
          position: 'absolute',
          left: '16px',
          top: '380px',
          width: '20px',
          height: '20px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <img
          src={LeftVector}
          alt=""
          style={{width:"30px", height:"30px"}}/>
      </button>

      <button
        onClick={handleNext}
        style={{
          position: 'absolute',
          right: '26px',
          top: '380px',
          width: '20px',
          height: '20px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <img 
          src={RightVector}
          alt=""
          style={{width:"30px", height:"30px"}}/>
      </button>

      {/* 타이틀 */}
      <p
        style={{
          position: 'absolute',
          left: '50%',
          top: '200px',
          transform: 'translateX(-50%)',
          fontFamily: 'SF Pro',
          fontWeight: '600',
          fontSize: '30px',
          color: '#606cf2',
          textAlign: 'center',
          whiteSpace:"nowrap"
        }}
      >
        {data.title}
      </p>

      {/* 설명 */}
      <div
        style={{
          position: 'absolute',
          left: '29px',
          top: '530px',
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
      <div style={{
        position:"absolute",
        left:"50%",
        top:"690px",
        transform:"translateX(-50%)",
        width:"345px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        gap:"20px"
      }}>
          <Button onClick={() => onSelect?.(currentType)} 
          style={{
            width:"100%", 
            fontWeight:"500"}}>
              선택하기
          </Button>

        {/* 건너뛰기 버튼 */}
          <Button variant="secondary" onClick={() => onSelect?.(currentType)} 
          style={{
            width:"100%", fontWeight:500}}>
            건너뛰기
          </Button>
      </div>
    </div>
  );
};

export default CharacterSelection;

