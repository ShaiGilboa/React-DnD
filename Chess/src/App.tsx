import React from 'react';
import styled from '@emotion/styled';

import './App.css';
import Knight from './components/Kight';
import Square from './components/Square';
import Board from './components/Board';
import Navbar from './components/Navbar';

function App() {
  return (
    <Wrapper>
    <Navbar />
    <Board />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3rem auto;
  grid-template-areas:
    "navbar"
    "board";
`;