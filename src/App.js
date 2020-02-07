import React from "react";
import ReactDOM from "react-dom";
import Calculator from "./view/Calculator";


const App = () =>

    <div className="app">
        <Calculator />
    </div>

ReactDOM.render(React.createElement(App), document.getElementById("root"));