import React, { PropsWithChildren, ReactElement, useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Square from './Square';
import Knight from './Kight';
import { RenderSquare } from '../functions';
import { canMoveKnight } from '../utils';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/index';
import { changeKnightLocation } from '../redux/actions/gameActions';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

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
        <Square color={color} coordinates={[column, row]}>
          {/* <p>{column}, {row}</p> */}
          </Square>
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
    <DndProvider data-css='Board' backend={HTML5Backend}>
      <Wrapper>
        {squares}
      </Wrapper>
    </DndProvider>
  )
}

export default Board;

const Wrapper = styled.div`
  grid-area: board;
  box-sizing: border-box;
  margin: 1rem;
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  display: flex;
  flex-wrap: wrap;
  -webkit-box-shadow: 0px 0px 25px 3px rgba(0,0,0,0.66); 
  box-shadow: 0px 0px 25px 3px rgba(0,0,0,0.66);
`;

const SquareWrapper = styled.div`
  width: 12.5%;
  height: 12.5%;
`