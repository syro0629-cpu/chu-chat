import React, { useState } from 'react';
import Home from './screens/Home';
import Intro from './screens/Intro';
import CharacterSelection from './screens/CharacterSelection';
import Chat from './screens/Chat';
import Dict from './screens/Dict';

type Screen = 'home' | 'intro' | 'characterSelection' | 'chat' | 'dict';
type CharacterType ="beginner" | "veteran" | null;

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedType, setSelectedType] = useState<CharacterType>(null);
  const [prevScreen, setPrevScreen] = useState<Screen>("home");
  
  {/*Chat 메시지 관리*/}
  const [chatMessages, setChatMessages] = useState<any[]>([]);
  
  {/*chat 바로가기 로직*/}
  const handleGoChat = () => {
    if (selectedType) {setCurrentScreen("chat");} else {setCurrentScreen("characterSelection");}
  };

  {/*캐릭터 선택으로, 타입 바뀌면 메시지 리셋*/}
  const handleSelectCharacter = (type: "beginner" | "veteran") => {
    setSelectedType(type);
    setChatMessages([]);
    setCurrentScreen("chat");
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#878686',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '402px',
          height: '874px',
          position: 'relative',
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
        }}
      >
        {currentScreen === 'home' && (
          <Home onNavigateToIntro={() => setCurrentScreen('intro')} />
        )}
        {currentScreen === 'intro' && (
          <Intro
            onGoChat = {handleGoChat}
            onSelectCharacter={() => setCurrentScreen('characterSelection')}
            onViewDict={() => {setPrevScreen("intro"); setCurrentScreen('dict');}}
            onBack={() => setCurrentScreen("home")}
            onClose={() => setCurrentScreen("home")}
          />
        )}
        {currentScreen === 'characterSelection' && (
          <CharacterSelection
            onSelect={handleSelectCharacter}
            onBack={() => setCurrentScreen('intro')}
            onClose={() => setCurrentScreen("home")}
          />
        )}
        {currentScreen === 'chat' && selectedType && (
          <Chat
            selectedType={selectedType}
            messages={chatMessages}
            setMessages={setChatMessages}
            onBack={() => setCurrentScreen('intro')}
            onClose={() => setCurrentScreen("home")}
            onViewDict={() => {setPrevScreen("chat"); setCurrentScreen('dict')}}
          />
        )}
        {currentScreen === 'dict' && (
          <Dict 
          onBack={() => setCurrentScreen(prevScreen)} 
          onClose={() => setCurrentScreen("home")}
          />
        )}
      </div>
    </div>
  );
};

export default App;

