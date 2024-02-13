import React from 'react';
import './App.css';
import axios from 'axios';
import { Button } from 'antd';
import Login from './Pages/login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login></Login>
      </header>
    </div>
  );
}

export default App;
