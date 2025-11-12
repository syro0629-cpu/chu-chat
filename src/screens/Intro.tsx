import React from 'react';
import StatusBar from '../components/StatusBar';
import HeaderBar from '../components/HeaderBar';
import Button from '../components/Button';
import Heart from "../assets/img/heart.png";
import IntroKiwoome from "../assets/img/intro_kiwoome.png";

interface IntroProps {
  onSelectCharacter?: () => void;
  onViewDict?: () => void;
  onBack?: () => void;
  onClose?: () => void;
}

const Intro: React.FC<IntroProps> = ({ onSelectCharacter, onViewDict, onBack, onClose }) => {
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
      <HeaderBar title="일취월Chat" onBack={onBack} onClose={onClose} />

      {/* 친밀도 */}
      <div style={{position: "relative", top:"50px"}}>
        <div
          style={{
            position: 'absolute',
            left: '30%',
            top: '191px',
            transform: 'translateX(-50%)',
            width: '90px',
            height: '40px',
            border: '1px solid #cbd3e3',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding:"0 15px"
          }}
        >
          <img
            src={Heart}
            alt=""
            style = {{width:"30px"}}/>
          <p style={{ 
            fontFamily: 'Nunito', 
            fontWeight: 'bold', 
            fontSize: '18px',
            marginTop:"-3px",
            width:"30px",
            }}>
              0
          </p>
        </div>

        {/* 챗봇 이미지 */}
        <img
          src={IntroKiwoome}
          alt=""
          style={{
            position: 'absolute',
            left: '30%',
            top: '245px',
            transform: 'translateX(-50%)',
            width: '177px',
            height: '177px',
            borderRadius: '50%',
            objectFit:"cover",
            zIndex:10
          }}/>

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
          <Button onClick={onSelectCharacter} 
          style={{ 
            width: '100%', 
            minHeight: '64px',
            fontWeight:"500" }}>채팅 바로가기</Button>
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
          <Button onClick={onSelectCharacter} 
          style={{ 
            width: '100%', 
            minHeight: '64px',
            fontWeight:"500" }}>키우Me 선택하기</Button>
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
          <Button onClick={onViewDict} 
          style={{ 
            width: '100%', 
            minHeight: '64px',
            fontWeight:"500" }}>도감 보기</Button>
        </div>
      </div>
    </div>
  );
};

export default Intro;

