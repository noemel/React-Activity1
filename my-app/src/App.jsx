import React from 'react';
import Counter from './Counter';
import ReactLogo from "./assets/reactlogo.svg";
import './App.css';
function App() {
    return (
        <div className="App">
            {/* React Logo */}
            <img src={ReactLogo} alt="React Logo" className="react-logo" />
            
            <h2>Count App</h2>
            <Counter />
        </div>
    );
}

export default App;
