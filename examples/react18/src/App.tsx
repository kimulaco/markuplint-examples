import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const title = 'React'

  return (
    <div className="App">
      <header className="App-header">
        <h1>{title}</h1>
        <img src={logo} className="App-logo" alt="logo" width="400" height="283" decoding="async" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
