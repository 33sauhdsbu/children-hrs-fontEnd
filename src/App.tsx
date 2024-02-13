import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => {
          // axios.get('http://localhost:8000').then((res) => {
          //   console.info(res);
          // })
        }}>Login</button>
      </header>
    </div>
  );
}

export default App;
