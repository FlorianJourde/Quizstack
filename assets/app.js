import React from 'react';
import {createRoot} from "react-dom/client";
import App from "./components/App";

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// console.log('Test')

/*import React from "react";
import ReactDOM from "react-dom";

const App = ({ name }) => <h1>Hello, {name}!</h1>;

document.addEventListener("DOMContentLoaded", () => {
    const element = document.getElementById("react-root");
    if (element) {
        ReactDOM.render(<App name="Symfony" />, element);
    }
});*/

/*import React from 'react'

export default function (props) {
    return <div>Hello {props.fullName}</div>
}*/

/*
import render from 'react-dom'
import React from 'react'

// import React from 'react';
import ReactDOM from 'react-dom';

function Stacks() {
    console.log("Hello !")
    return <div>bonjour tout le monde</div>
}

class StacksElement extends HTMLElement {

    connectedCallback() {
        // this.innerHTML = "React enabled"
        render(<Stacks/>, this)
    }
}

customElements.define('post-stacks', StacksElement)*/
