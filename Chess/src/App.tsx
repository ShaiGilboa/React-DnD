import React from 'react';
import logo from './logo.svg';
import './App.css';
import Knight from './components/Kight';
import Square from './components/Square';

function App() {
  return (
    <>
    <Square>
      <Knight />
    </Square>
    <Square color={'black'}>
      <Knight />
    </Square>
    </>
  );
}

export default App;
