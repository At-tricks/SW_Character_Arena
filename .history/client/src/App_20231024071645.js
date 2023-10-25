import React from 'react';
import SearchCharacters from './components/SearchCharacterComponent/searchCharacters';
import Character from './components/CharacterComponent/character';
import MessageBox from './components/MessageBoxComponent/messageBox';

function App() {
  return (
    <div>
      <SearchCharacters />
      <Character name="Character 1" image="url-to-image" attributes={{ height: '180cm', ... }} />
      <Character name="Character 2" image="url-to-image" attributes={{ height: '170cm', ... }} />
      <MessageBox winner="Character 1" onDismiss={() => { /* handle dismissal */ }} />
    </div>
  );
}

export default App;