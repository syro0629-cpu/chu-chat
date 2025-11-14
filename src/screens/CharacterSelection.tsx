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
      title: "입문자 멘토",
      name: '루키',
      description: "안녕하세요, 입문자 멘토 루키에요!🙌\n투자의 첫 단추를 제대로 끼울 수 있도록 \n옆에서 다정하게 알려드릴게요."
    },
    veteran: {
      title: '베테랑 멘토',
      name:"마스터",
      description: '안녕하세요, 베테랑 멘토 마스터입니다.😊\n오늘은 어떤 영역을 분석해 드릴까요?\n데이터를 바탕으로 인사이트를 제공합니다.',
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
          left: '31px',
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
          right: '35px',
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
          top: '180px',
          transform: 'translateX(-50%)',
          fontFamily: 'SF Pro',
          fontWeight: '600',
          fontSize: '28px',
          color: '#606cf2',
          textAlign: 'center',
          whiteSpace:"nowrap"
        }}
      >
        {data.title}
      </p>

      {/* 이름 */}
      <p style = {{
        position:"absolute",
        left:"50%",
        top:"230px",
        transform:"translateX(-50%)",
        fontFamily:"SF pro",
        fontWeight:"500",
        fontSize:"25px",
        color:"#000000",
        textAlign:"center",
        whiteSpace:"nowrap"
      }}>
        {data.name}
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

