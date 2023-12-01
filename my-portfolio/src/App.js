import { useState } from 'react';
import './App.css';
import Cursor from './components/Cursor';
import Header from './components/header/Header';
import Home from './components/home/Home.js';

function App() {
  const [cursorPosition, setCursorPosition] = useState({x:0,y:0});
  window.addEventListener('mousemove', (e)=>{
    setCursorPosition({x:e.clientX,y:e.clientY});
  })
  return (
    <div className="App">
      <Cursor position={cursorPosition}/>
      <Header />
      <Home />
    </div>
  );
}

export default App;
