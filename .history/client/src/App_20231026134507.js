import React from 'react';
import SearchCharacters from './components/CharacterComparisonForm';
import Character from './components/CharacterDetails';
import MessageBox from './components/WinnerMessageBox';

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