import React, { PropsWithChildren, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/index';
import Knight from './Kight';

interface props {
  style?: React.CSSProperties,
  color?: 'white' | 'black',
  coordinates: number[],
};

const Square : React.FC<PropsWithChildren<props>> = ({ color = 'white',coordinates , children }) => {
  const {knightLocation} = useSelector((state : RootState) => state.game)
  const [isKnight, setIsKnight] = useState<boolean>(false);

  useEffect(()=>{
    console.log('isKnight', isKnight)
    if(coordinates[0] === knightLocation[0] && coordinates[1] === knightLocation[1]){
      setIsKnight(true)
    } else {
      setIsKnight(false)
    }
  },[knightLocation])
  return (
    <Wrapper data-css='Square' color={color} isKnight={isKnight}>
      {children}
      {isKnight ? <Knight /> : null} 
    </Wrapper>
  )
}

export default Square;

const Wrapper = styled.div<{color: 'black' | 'white', isKnight : boolean}>`
  background-color: ${props => props.color};
  color: ${props => props.color === 'black' ? 'white' : 'black'};
  width: 100%;
  height: 100%;
  outline: solid 3px ${props => props.isKnight ? 'red' : 'black'};
`;