import React, { useState } from 'react';

function SearchCharacters() {
    const [character1, setCharacter1] = useState('');
    const [character2, setCharacter2] = useState('');

    const handleCompare = () => {
        // Perform comparison logic with character1 and character2
        // Display the winner in the MessageBox component
    };

    return (
    <div>
        <input
            type="text"
            placeholder="Character 1"
            value={character1}
            onChange={(e) => setCharacter1(e.target.value)}
        />
        <input
            type="text"
            placeholder="Character 2"
            value={character2}
            onChange={(e) => setCharacter2(e.target.value)}
        />
        <button onClick={handleCompare}>Compare</button>
    </div>
    );
};


function Character({ name, image, attributes }) {
    return (
        <div>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <ul>
                {Object.entries(attributes).map(([key, value]) => (
                <li key={key}>
                {key}: {value}
                </li>
                ))}
            </ul>
        </div>
    );
}


function MessageBox({ winner, onDismiss }) {
    return (
        <div>
            <p>{winner} wins!</p>
            <button onClick={onDismiss}>OK</button>
        </div>
    );
}


export default SearchCharacters, Character MessageBox;
export default Character;
export default SearchCharacters;
