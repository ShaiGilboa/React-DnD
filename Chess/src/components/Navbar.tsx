import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/index';
import { undo } from '../redux/actions/gameActions';

interface props {
  style?: React.CSSProperties,
  
};

const Navbar : React.FC<PropsWithChildren<props>> = () => {
  const {status, knightLocation, moves, pastPositions} = useSelector((state : RootState) => state.game)
  const dispatch = useDispatch();
  
  
  return (
    <Wrapper data-css='Topbar'>
      <p>past moves: {pastPositions.map((position : number[], index : number) => <span>{index+1}: [{position[0]}, {position[1]}]</span>)}, moves: {moves}, knightLocation: {knightLocation[0]},{knightLocation[1]} , status: {status}</p>
      <button
        onClick={() => dispatch(undo())}
      >
        undo
      </button>
    </Wrapper>
  )
}

export default Navbar;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  grid-area: navbar
`;