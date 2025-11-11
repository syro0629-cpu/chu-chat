import React, { useState } from 'react';
import Home from './screens/Home';
import Intro from './screens/Intro';
import CharacterSelection from './screens/CharacterSelection';
import Chat from './screens/Chat';
import Dict from './screens/Dict';

type Screen = 'home' | 'intro' | 'character1' | 'character2' | 'chat' | 'dict';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

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
            onSelectCharacter={() => setCurrentScreen('character1')}
            onViewDict={() => setCurrentScreen('dict')}
          />
        )}
        {currentScreen === 'character1' && (
          <CharacterSelection
            type="beginner"
            onSelect={() => setCurrentScreen('chat')}
            onSkip={() => setCurrentScreen('chat')}
            onBack={() => setCurrentScreen('intro')}
          />
        )}
        {currentScreen === 'character2' && (
          <CharacterSelection
            type="veteran"
            onSelect={() => setCurrentScreen('chat')}
            onSkip={() => setCurrentScreen('chat')}
            onBack={() => setCurrentScreen('intro')}
          />
        )}
        {currentScreen === 'chat' && (
          <Chat
            onBack={() => setCurrentScreen('home')}
            onViewDict={() => setCurrentScreen('dict')}
          />
        )}
        {currentScreen === 'dict' && (
          <Dict onBack={() => setCurrentScreen('home')} />
        )}
      </div>
    </div>
  );
};

export default App;

