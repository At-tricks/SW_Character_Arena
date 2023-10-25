import React, { useState, useEffect } from 'react';

const CharacterComparisonForm = ({ characterNames, onCompare }) => {
    const [character1, setCharacter1] = useState('');
    const [character2, setCharacter2] = useState('');

    const handleCompare = () => {
        onCompare(character1, character2);
    };

    return (
        <div>
            <label>
                Character 1:
                <select value={character1} onChange={e => setCharacter1(e.target.value)}>
                    <option value="">Select Character</option>
                    {characterNames.map(name => (
                        <option key={name} value={name}>{name}</option>
                    ))}
                </select>
            </label>
    

            <label>
                Character 2:
                <select value={character2} onChange={e => setCharacter2(e.target.value)}>
                    <option value="">Select Character</option>
                    {characterNames.map(name => (
                        <option key={name} value={name}>{name}</option>
                    ))}
                </select>
            </label>

            <button onClick={handleCompare}>Compare</button>
        </div>
    );
};

export default CharacterComparisonForm;
