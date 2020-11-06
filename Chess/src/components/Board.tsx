import React, { PropsWithChildren, ReactElement, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Square from './Square';
import Knight from './Kight';
import { RenderSquare } from '../functions';
import { canMoveKnight, moveKnight, knightPosition} from '../utils';

interface props {
  style?: React.CSSProperties,
  knightPosition?: number[],
};

const Board : React.FC<PropsWithChildren<props>> = ({}) => {
  const [squares, setSquares] = useState<ReactElement[]>([]);

  const renderSquare = (index : number, [knightX, knightY] : number[]) : ReactElement  => {
    const column : number = index % 8
    const row : number = Math.floor(index / 8)
    const color : "white" | "black" = (row + column) % 2 === 1 ? "black" : "white";
    const isKnight : boolean =  (knightX === column && knightY === row);
    console.log('row, column', row, column)
    
    return (
      <SquareWrapper key={`square[${row},${column}]`}
        onClick={()=> handleSquareClick(column, row)}
      >
        <Square color={color}>{isKnight ? <Knight /> : null} <p>{column}, {row}</p></Square>
      </SquareWrapper>
      )
  }

  function handleSquareClick(toX : number, toY : number) {
    console.log('toX, toY', toX, toY)
    console.log('anMoveKnight(toX, toY)', canMoveKnight(toX, toY))
    if (canMoveKnight(toX, toY)) {
      moveKnight(toX, toY)
    }
  }

  useEffect(()=>{
    const newSquares : ReactElement[] = [];
    for (let index = 0; index < 64; index ++) {
      newSquares.push(renderSquare(index, knightPosition))
    }
    setSquares(newSquares)
  },[])

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