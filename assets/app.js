import React from 'react';
import {createRoot} from "react-dom/client";
// import AppComponent from "./components/AppComponent";
import App from "./components/App";
import Question from "./components/Question";
// javascriptCopier// Dans votre point d'entrée React (question_app.js ou similaire)
import './styles/app.css';  // Ajustez le chemin selon votre structure


// const container = document.getElementById('app');
// const root = createRoot(container);

document.addEventListener('DOMContentLoaded', () => {
    const questionContainer = document.getElementById('question-container');
    if (questionContainer) {
        const productRoot = createRoot(questionContainer);
        productRoot.render(
            <React.StrictMode>
                <Question/>
            </React.StrictMode>
        );
    }
});



// root.render(
//     <React.StrictMode>
//         <AppComponent/>
//         {/*<h1>Test React</h1>*/}
//     </React.StrictMode>
// )

//
// class App extends React.Component {
//     constructor() {
//         super();
//
//         this.state = {
//             entries: []
//         };
//     }
//
//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/posts/')
//             .then(response => response.json())
//             .then(entries => {
//                 this.setState({
//                     entries
//                 });
//             });
//     }
//
//     render() {
//         return (
//             <div className="row">
//                 {this.state.entries.map(
//                     ({ id, title, body }) => (
//                         <Items
//                             key={id}
//                             title={title}
//                             body={body}
//                         >
//                         </Items>
//                     )
//                 )}
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(<App />, document.getElementById('root'));
//

// console.log('test');
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
