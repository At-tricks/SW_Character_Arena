import React from 'react';
import ReactDOM from 'react-dom/client';
import SearchCharacters from './SearchCharacters';
import Character from './components/CharacterComponent/Character.js';
import MessageBox from './components/MessageBox/MessageBox';

function App() {
  return (
    <div className='App'>
      <SearchCharacters />
      <Character name="Character 1" image="url-to-image" attributes={{ }} />
      <Character name="Character 2" image="url-to-image" attributes={{ }} />
      <MessageBox winner="Character 1" onDismiss={() => {  }} />
    </div>
  );
}

export default App;