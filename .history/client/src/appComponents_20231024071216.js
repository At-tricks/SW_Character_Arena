


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
