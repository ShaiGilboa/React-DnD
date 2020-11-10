import React, { PropsWithChildren, ReactElement, useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Square from './Square';
import Knight from './Kight';
import { RenderSquare } from '../functions';
import { canMoveKnight } from '../utils';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/index';
import { changeKnightLocation } from '../redux/actions/gameActions';

interface props {
  style?: React.CSSProperties,
};

const Board : React.FC<PropsWithChildren<props>> = ({}) => {
  const { knightLocation, status } = useSelector((state : RootState) => state.game)
  const dispatch = useDispatch();

  const [squares, setSquares] = useState<ReactElement[]>([]);

  const renderSquare = (index : number, [knightX, knightY] : number[]) : ReactElement  => {
    const column : number = index % 8
    const row : number = Math.floor(index / 8)
    const color : "white" | "black" = (row + column) % 2 === 1 ? "black" : "white";
    const isKnight : boolean =  (knightX === column && knightY === row);
    
    return (
      <SquareWrapper key={`square[${row},${column}]`}
        onClick={()=>  dispatch(changeKnightLocation([column, row]))}
      >
        <Square color={color} coordinates={[column, row]}><p>{column}, {row}</p></Square>
      </SquareWrapper>
      )
  }


  useEffect(()=>{
    const newSquares : ReactElement[] = [];
    for (let index = 0; index < 64; index ++) {
      newSquares.push(renderSquare(index, knightLocation))
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