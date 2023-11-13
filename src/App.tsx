import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={() => {
          axios.get('http://localhost:8000').then((res) => {
            console.info(res);
          })
        }}>TEST</button>
      </header>
    </div>
  );
}

export default App;
