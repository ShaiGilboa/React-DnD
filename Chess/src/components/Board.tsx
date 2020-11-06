import React, { PropsWithChildren, ReactElement } from 'react';
import styled from '@emotion/styled';
import Square from './Square';
import Knight from './Kight';
import { RenderSquare } from '../functions';

interface props {
  style?: React.CSSProperties,
  knightPosition?: number[],
};

const Board : React.FC<PropsWithChildren<props>> = ({knightPosition = [1,0]}) => {

  const renderSquare = (index : number, [knightX, knightY] : number[]) : ReactElement  => {
    const row : number = index % 8
    const column : number = Math.floor(index / 8)
    const color : "white" | "black" = (row + column) % 2 === 1 ? "black" : "white";
    const isKnight : boolean =  (knightX === row && knightY === column);

    return (
      <SquareWrapper key={`square[${row},${column}]`}>
        <Square color={color}>{isKnight ? <Knight /> : null}</Square>
      </SquareWrapper>)
  }

  const arr = [];
  arr[63] = 1;
  console.log('arr', arr)
  return (
    <Wrapper data-css='Board'>
      {arr.map((x : any, index : number) => renderSquare(index, knightPosition))}
    </Wrapper>
  )
}

export default Board;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const SquareWrapper = styled.div`
  width: 12.5%;
  height: 12.5%;
`