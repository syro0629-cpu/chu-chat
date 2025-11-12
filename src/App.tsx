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

  const handleGoChat = () => {
    if (selectedType) {setCurrentScreen("chat");} else {setCurrentScreen("characterSelection");}
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
            onSelect={(type) => {setSelectedType(type); setCurrentScreen("chat");}}
            onBack={() => setCurrentScreen('intro')}
            onClose={() => setCurrentScreen("home")}
          />
        )}
        {currentScreen === 'chat' && selectedType && (
          <Chat
            selectedType={selectedType}
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

