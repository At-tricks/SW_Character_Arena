import React from 'react';
import ReactDOM from 'react-dom/client';
import SearchCharacters from './components/SearchCharacterComponent/searchCharacters';
import Character from './components/CharacterComponent/character';
import MessageBox from './components/MessageBoxComponent/messageBox';

function App() {
  return (
    <div>
      <SearchCharacters />
      <Character name="Character 1" image="url-to-image" attributes={{ }} />
      <Character name="Character 2" image="url-to-image" attributes={{ }} />
      <MessageBox winner="Character 1" onDismiss={() => {  }} />
    </div>
  );
}

export default App;