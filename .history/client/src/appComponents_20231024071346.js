





function MessageBox({ winner, onDismiss }) {
    return (
        <div>
            <p>{winner} wins!</p>
            <button onClick={onDismiss}>OK</button>
        </div>
    );
}


export default SearchCharacters, Character MessageBox;


