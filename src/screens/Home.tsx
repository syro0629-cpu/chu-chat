import React from 'react';
import StatusBar from '../components/StatusBar';
import Kiwoome from "../assets/img/kiwoome.png"


interface HomeProps {
  onNavigateToIntro?: () => void;
}

const Home: React.FC<HomeProps> = ({ onNavigateToIntro }) => {
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
      {/* 상위 카테고리 */}
      <div
        style={{
          position:"absolute",
          top:"120px",
          left:"20px",
          display:"flex",
          gap:"18px",
          fontFamily:"SF pro",
          fontSize:"20px"
        }}>
          <span style ={{
            fontWeight: "bold",
            color:"#000000",
            borderBottom:"2px solid #000000",
            paddingBottom:"3px"
          }}>
            국내
          </span>
          <span style ={{
            fontWeight: "normal",
            color:"#a9a9a9",
            paddingBottom:"3px"
          }}>
            해외
          </span>
          <span style ={{
            fontWeight: "normal",
            color:"#a9a9a9",
            paddingBottom:"3px"
          }}>
            상품
          </span>
      </div>

      {/* 검색창 */}
      <div
        style={{
          position: 'absolute',
          left: '16px',
          top: '180px',
          width: '370px',
          height: '50px',
          backgroundColor: '#f5f5f5',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '21px',
        }}
      >
        <p
          style={{
            fontFamily: 'SF Pro',
            fontWeight: 590,
            fontSize: '17px',
            color: '#a9a9a9',
          }}
        >
          종목 메뉴를 검색해주세요
        </p>
      </div>

      {/* 카테고리 태그 */}
      <div style={{ 
        position: 'absolute', 
        left: '15px', 
        top: '246px',
        display: 'flex', 
        gap: "8px",
        flexWrap:"wrap",
        }}>
          {['#고영', '#삼성전자', '#SK하이닉스', '#일동제약'].map((tag) => (
          <div
            key={tag}
            style={{
              backgroundColor: '#f5f5f5',
              borderRadius: '20px',
              padding: '5px 12px',
              fontFamily: 'SF Pro',
              fontWeight: 'bold',
              fontSize: '15px',
              color: '#a9a9a9',
            }}
          >
            {tag}
          </div>
        ))}
      </div>

      {/* 광고 배너 */}
      <div
        style={{
          position: 'absolute',
          left: '16px',
          top: '305px',
          width: '370px',
          height: '50px',
          backgroundColor: '#212354',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'SF Pro',
            fontWeight: 'bold',
            fontSize: '18px',
            color: '#ffffff',
          }}
        >
          2025 final 투자 왕중왕전,{' '}
          <span style={{ color: '#f2bf38' }}>영웅결정전 시작!</span>
        </p>
      </div>

      {/* 주가 차트 영역 */}
      <div
        style={{
          position: 'absolute',
          left: '16px',
          top: '379px',
          width: '370px',
          height: '300px',
          backgroundColor: '#f5f5f5',
          borderRadius: '10px',
          padding: '20px',
        }}
      >
        <p
          style={{
            fontFamily: 'SF Pro',
            fontWeight: 'bold',
            fontSize: '20px',
            marginBottom: '20px',
          }}
        >
          빅데이터
        </p>

        {/* 탭 메뉴 */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          {['실시간 조회', '조회수 급증', '매매 상위'].map((tab, idx) => (
            <div
              key={tab}
              style={{
                backgroundColor: idx === 0 ? '#212354' : '#f5f5f5',
                borderRadius: '5px',
                padding: '6px 12px',
                fontFamily: 'SF Pro',
                fontWeight: 'bold',
                fontSize: '15px',
                color: idx === 0 ? '#ffffff' : '#a9a9a9',
              }}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* 주가 리스트 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {[
            { name: '1 고영', price: '20,550', change: '▲ 26.23%', color: '#e12e73' },
            { name: '2 SK하이닉스', price: '604,000', change: '▲ 4.32%', color: '#e12e73' },
            { name: '3 일동제약', price: '31,350', change: '▲ 10.39%', color: '#e12e73' },
            { name: '4 삼성전자', price: '100,000', change: '▼ 10.39%', color: '#1d50dd' },
          ].map((item) => (
            <div
              key={item.name}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                
              }}
            >
              <p style={{ fontFamily: 'SF Pro', fontWeight: 'bold', fontSize: '18px' }}>
                {item.name}
              </p>
              <div style={{ 
                display: 'flex',
                alignItems:"center",
                justifyContent:"flex-end", 
                gap: '10px',
                width:"180px"
                }}>
                  <p style={{ 
                    fontFamily: 'SF Pro', 
                    fontWeight: 'bold', 
                    fontSize: '18px', 
                    color: item.color,
                    textAlign:"right",
                    width:"90px"}}>
                    {item.price}
                  </p>
                  <p style={{ 
                    fontFamily: 'SF Pro', 
                    fontWeight: 'bold', 
                    fontSize: '18px', 
                    color: item.color,
                    textAlign:"left",
                    width:"100px" }}>
                    {item.change}
                  </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 챗봇 아이콘 */}
      <button
        onClick={onNavigateToIntro}
        style={{
          position: 'absolute',
          left: '234px',
          top: '668px',
          width: '150px',
          height: '150px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '80px',
        }}
      >
        <img
          src={Kiwoome}
          alt=""
          style={{
            width:"200px",
            height:"200px"
          }}/>
      </button>

      {/* 대화 버튼 */}
      <div
        onClick={onNavigateToIntro}
        style={{
          position: 'absolute',
          left: '75px',
          top: '630px',
          width: '158px',
          height: '73px',
          backgroundColor: '#606cf2',
          borderTopRightRadius: '10px',
          borderTopLeftRadius: '10px',
          borderBottomLeftRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <p
          style={{
            fontFamily: 'SF Pro',
            fontWeight: 'bold',
            fontSize: '15px',
            color: '#ffffff',
            textAlign: 'center',
          }}
        >
          어떤 <span style={{ color: '#fff700' }}>키우미와</span>
          <br />
          대화하고 싶어?
        </p>
      </div>

      {/* 하단 메뉴 */}
      <div
        style={{
          position: 'absolute',
          left: '0',
          top: '809px',
          width: '402px',
          height: '65px',
          backgroundColor: '#f5f5f5',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        {['메뉴', '관심종목', '현재가', '주문', '차트', '계좌', '종합'].map((menu) => (
          <div
            key={menu}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <p
              style={{
                fontFamily: 'SF Pro',
                fontWeight: 'bold',
                fontSize: '13px',
                color: '#a9a9a9',
              }}
            >
              {menu}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

