import React from 'react';

const CharacterDetails = ({ character }) => {
    return (
        <div>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <p>Birth Year: <span className={character.attribute1ClassName}>{character.attribute1}</span></p>
            <p>Height: <span className={character.attribute2ClassName}>{character.attribute2}</span></p>
            <p>Mass: <span className={character.attribute3ClassName}>{character.attribute3}</span></p>
            <p>Eye Color: <span className={character.attribute4ClassName}>{character.attribute4}</span></p>
            <p>Hair Color: <span className={character.attribute5ClassName}>{character.attribute5}</span></p>
            <p>Home World: <span className={character.attribute6ClassName}>{character.attribute6}</span></p>
            <p>Species: <span className={character.attribute7ClassName}>{character.attribute7}</span></p>
            <p>Attribute 8: <span className={character.attribute8ClassName}>{character.attribute8}</span></p>
        </div>
    );
};

export default CharacterDetails;
