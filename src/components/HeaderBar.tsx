import React from 'react';
import vectorIcon from "../assets/img/vector.png";
import crossIcon from "../assets/img/cross.png";

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
        width:"100%",
        top: '62px',
        backgroundColor: '#606cf2',
        zIndex: 1000,
        pointerEvents:"auto"
      }}
    >
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
            width: '20px',
            height: '20px',
            padding: 0,
            pointerEvents:"auto",
            zIndex:1
          }}
        >
          <img 
            src = {vectorIcon}
            alt = ""
            style={{
              width:"100%",
              height:"100%",
              objectFit:"contain",
              pointerEvents:"none"
            }}/>

        </button>
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
            fontSize: '17px',
            width:"20px",
            height:"20px",
            padding:0,
            pointerEvents:"auto",
            zIndex:1
          }}
        >
          <img 
            src={crossIcon}
            alt=""
            style={{
              width:"100%",
              height:"100%",
              objectFit:"contain",
              filter:"brightness(0) invert(1)"
              }}/>
        </button>
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

