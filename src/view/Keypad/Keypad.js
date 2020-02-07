import React from 'react';
import KeyPadRow from './KeypadRow';
import Button from '../../components/Button';
const KeyPad = (props) => {
    return (
        <div className="keypad">
            <KeyPadRow>
                <Button onButtonPress={props.onButtonPress}
                >C</Button>
                <Button onButtonPress={props.onButtonPress}>CE</Button>
                <Button onButtonPress={props.onButtonPress}>%</Button>
                <Button onButtonPress={props.onButtonPress}>/</Button>
            </KeyPadRow>
            <KeyPadRow >
                <Button onButtonPress={props.onButtonPress}>9</Button>
                <Button onButtonPress={props.onButtonPress}>8</Button>
                <Button onButtonPress={props.onButtonPress}>7</Button>
                <Button onButtonPress={props.onButtonPress}>*</Button>
            </KeyPadRow>
            <KeyPadRow>
                <Button onButtonPress={props.onButtonPress}>6</Button>
                <Button onButtonPress={props.onButtonPress}>5</Button>
                <Button onButtonPress={props.onButtonPress}>4</Button>
                <Button onButtonPress={props.onButtonPress}>-</Button>
            </KeyPadRow>
            <KeyPadRow>
                <Button onButtonPress={props.onButtonPress}>3</Button>
                <Button onButtonPress={props.onButtonPress}>2</Button>
                <Button onButtonPress={props.onButtonPress}>1</Button>
                <Button onButtonPress={props.onButtonPress}>+</Button>
            </KeyPadRow>
            <KeyPadRow>
                <Button onButtonPress={props.onButtonPress}>0</Button>
                <Button onButtonPress={props.onButtonPress}>.</Button>
                <Button type="large" onButtonPress={props.onButtonPress}>=</Button>
            </KeyPadRow>
        </div>
    )
}

export default KeyPad;