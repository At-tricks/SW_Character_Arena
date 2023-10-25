import React from 'react';

const WinnerMessageBox = ({ winner, onDismiss }) => {
    return (
        <div>
            <h3>Winner: {winner}</h3>
            <button onClick={onDismiss}>Ok</button>
        </div>
    );
};

export default WinnerMessageBox;
