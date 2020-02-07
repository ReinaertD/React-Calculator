import React, { useState } from 'react';
import Screen from './Screen/Screen';
import KeyPad from './Keypad/Keypad';


const Calculator = () => {
    const [equation, setEquation] = useState();
    const [result, setResult] = useState(0);

    const onButtonPress = event => {
        let eEquation = equation;
        const pressedButton = event.target.innerHTML;

        if (pressedButton === 'C') {
            return clear();
        } else if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.') {
            eEquation += '' + pressedButton + '';
        } else if (['+', '-', '*', '/', '%'].indexOf(pressedButton) !== -1) {
            eEquation += ' ' + pressedButton + ' ';
        } else if (pressedButton === '=') {
            try {
                const evalResult = eval(eEquation);
                const result = Number.isInteger(evalResult) ? evalResult :
                    evalResult.toFixed(2);
                setResult(result);
            } catch (error) {
                alert('Invalid Mathematical Equation');
            }
        } else {
            eEquation = eEquation.trim();
            eEquation = eEquation.substr(0, eEquation.length - 1);
        }
        setEquation(eEquation);
    }

    function clear() {
        setEquation('')
        setResult(0)
    }

    return (
        <div className="calculator">
            <Screen equation={equation} result={result} />
            <KeyPad onButtonPress={onButtonPress} />
        </div>
    )
}

export default Calculator;
