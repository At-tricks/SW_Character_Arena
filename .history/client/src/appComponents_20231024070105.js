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

import React from 'react';

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





export default Character;
export default SearchCharacters;
