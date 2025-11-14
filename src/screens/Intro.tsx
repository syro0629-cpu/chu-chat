import React from 'react';
import StatusBar from '../components/StatusBar';
import HeaderBar from '../components/HeaderBar';
import Button from '../components/Button';

import Heart from "../assets/img/heart.png";
import IntroKiwoome from "../assets/img/intro_kiwoome.png";

interface IntroProps {
  onGoChat?: () => void;
  onSelectCharacter?: () => void;
  onViewDict?: () => void;
  onBack?: () => void;
  onClose?: () => void;
  affinity?: number;
}

/* TODO: affinity 기준으로 백이랑 연결해서, 친밀도 보여주기 */
const Intro: React.FC<IntroProps> = ({
  onGoChat,
  onSelectCharacter,
  onViewDict,
  onBack,
  onClose,
  affinity = 0,
}) => {
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

      {/* 친밀도 표시 영역 */}
      <div style={{ position: "relative", top: "50px" }}>
        
        {/* 친밀도 박스 */}
        <div
          style={{
            position: 'absolute',
            left: '30%',
            top: '191px',
            transform: 'translateX(-50%)',
            width: '190px',
            height: '40px',
            border: '1px solid #cbd3e3',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: "0 16px",
            backgroundColor: 'white',
            gap: '7px',
          }}
        >
          <img
            src={Heart}
            alt="하트"
            style={{
              width: "25px",
              height: "25px",
              objectFit: "contain",
              display: "block",
            }}
          />

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px',
              marginTop: '-2px',
            }}
          >
            <p
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 700,
                fontSize: '15px',
                color: '#5E5E5E',
                margin: '0',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              우리 사이 온도
            </p>
            <span
              style={{
                color: '#FF4D6D',
                fontWeight: 800,
                fontSize: '17px',
                marginTop: '0px',
                marginLeft: '3px',
              }}
            >
              {affinity}°
            </span>
          </div>
        </div>

        {/* 키우미 캐릭터 */}
        <img
          src={IntroKiwoome}
          alt="키우미 캐릭터"
          style={{
            position: 'absolute',
            left: '30%',
            top: '245px',
            transform: 'translateX(-50%)',
            width: '177px',
            height: '177px',
            borderRadius: '50%',
            objectFit: 'cover',
            zIndex: 10,
          }}
        />

        {/* 버튼 영역 */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '391px',
            transform: 'translateX(-50%)',
            width: '345px',
          }}
        >
          <Button
            onClick={onGoChat}
            style={{
              width: '100%',
              minHeight: '64px',
              fontWeight: '500',
            }}
          >
            채팅 바로가기
          </Button>
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
          <Button
            onClick={onSelectCharacter}
            style={{
              width: '100%',
              minHeight: '64px',
              fontWeight: '500',
            }}
          >
            멘토 선택하기
          </Button>
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
          <Button
            onClick={onViewDict}
            style={{
              width: '100%',
              minHeight: '64px',
              fontWeight: '500',
            }}
          >
            도감 보기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Intro;