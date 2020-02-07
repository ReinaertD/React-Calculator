import React from "react";
import ComputationScreen from "./ComputationScreen";
import ResultScreen from "./ResultScreen";

const Screen = (props) => {
    return (
        <div className="screen">
            <ResultScreen>{props.result}</ResultScreen>
            <ComputationScreen>{props.equation}</ComputationScreen>
        </div>
    )
}

export default Screen;