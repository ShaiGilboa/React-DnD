import React, { PropsWithChildren, ReactElement, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Square from './Square';
import Knight from './Kight';
import { RenderSquare } from '../functions';

interface props {
  style?: React.CSSProperties,
  knightPosition?: number[],
};

const Board : React.FC<PropsWithChildren<props>> = ({knightPosition = [1,0]}) => {
  const [squares, setSquares] = useState<ReactElement[]>([]);

  const renderSquare = (index : number, [knightX, knightY] : number[]) : ReactElement  => {
    const column : number = index % 8
    const row : number = Math.floor(index / 8)
    const color : "white" | "black" = (row + column) % 2 === 1 ? "black" : "white";
    const isKnight : boolean =  (knightX === column && knightY === row);
    console.log('row, column', row, column)
    console.log('isKnight', isKnight)
    return (
      <SquareWrapper key={`square[${row},${column}]`}>
        <Square color={color}>{isKnight ? <Knight /> : null}</Square>
      </SquareWrapper>
      )
  }

  useEffect(()=>{
    const newSquares : ReactElement[] = [];
    for (let index = 0; index < 64; index ++) {
      // console.log('squares in useEffect', squares.length)
      // let newSquares = squares.concat(renderSquare(index, knightPosition))
      newSquares.push(renderSquare(index, knightPosition))
    }
    // setSquares([renderSquare(0,knightPosition),renderSquare(1,knightPosition),renderSquare(2,knightPosition),renderSquare(3,knightPosition)])
    setSquares(newSquares)
  },[])

  console.log('squares', squares)
  return (
    <Wrapper data-css='Board'>
      {squares}
    </Wrapper>
  )
}

export default Board;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const SquareWrapper = styled.div`
  width: 12.5%;
  height: 12.5%;
`