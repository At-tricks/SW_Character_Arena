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
};
export default Character;