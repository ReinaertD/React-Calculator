import React from 'react';

const KeyPadRow = (props) => {
    return (
        <div className="keypad__row">
            {props.children}
        </div>
    )
}

export default KeyPadRow;