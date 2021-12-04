import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import CounterByMe from './CounterByMe/CounterByMe'
import Count from './Count/Count'
import Count2 from './Count/Count'

// import reportWebVitals from './reportWebVitals'


// document.querySelector('#root') = data

ReactDOM.render (
    <React.StrictMode>
        {/* <App/> */}
        {/* <CounterByMe/> */}
        {/* <Count/> */}
        <Count2/>

    </React.StrictMode>,
    document.querySelector('#root')
);

    // reportWebVitals()