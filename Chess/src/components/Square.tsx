import React, { PropsWithChildren, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd'

import { RootState } from '../redux/reducers/index';
import Knight from './Kight';
import { ItemTypes } from '../DnDConstants';
import { changeKnightLocation, toggleShowPotentialMoves } from '../redux/actions/gameActions';
import { canMoveKnight } from '../utils';

interface props {
  style?: React.CSSProperties,
  color?: 'white' | 'black',
  coordinates: number[],
};

const Square : React.FC<PropsWithChildren<props>> = ({ color = 'white',coordinates , children }) => {
  const dispatch = useDispatch();
  const {knightLocation, showPotentialMoves} = useSelector((state : RootState) => state.game)
  const [isKnight, setIsKnight] = useState<boolean>(false);
  const [canMove, setCanMove] = useState<boolean>(false);
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.KNIGHT,
    drop: () => dispatch(changeKnightLocation(coordinates)),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    }),
    canDrop: () => canMoveKnight(coordinates, knightLocation)
  })

  useEffect(()=>{
    if(coordinates[0] === knightLocation[0] && coordinates[1] === knightLocation[1]){
      setIsKnight(true)
    } else {
      setIsKnight(false)
    }
  },[knightLocation])

  useEffect(() => {
    showPotentialMoves
      ? setCanMove(canMoveKnight(coordinates, knightLocation))
      : setCanMove(false)
  }, [showPotentialMoves])
  return (
    <Wrapper data-css='Square' color={color} isKnight={isKnight}
      ref={drop}
      isOver={isOver}
      canDrop={canDrop}
      canMove={canMove}
    >
      {children}
      {isKnight ? <Knight /> : null} 
    </Wrapper>
  )
}

export default Square;

const Wrapper = styled.div<{color: 'black' | 'white', isKnight : boolean, isOver : boolean, canDrop : boolean, canMove: boolean}>`
  background-color: ${props => props.color};
  color: ${props => props.color === 'black' ? 'white' : 'black'};
  width: 100%;
  height: 100%;
  outline: solid 3px ${props => props.isKnight ? 'red' : 'black'};
  ${props => 
    props.isOver && 'opacity: 0.5;'}
  ${props =>
    props.isOver && !props.canDrop && "background-color: red;"}
  ${props =>
    (props.canDrop || props.canMove) && "background-color: yellow;"}
  ${props =>
    props.isOver && props.canDrop && "background-color: green;" }
`;