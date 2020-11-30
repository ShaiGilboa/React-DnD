import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { useDrag, DragPreviewImage } from 'react-dnd';
import { ItemTypes } from '../DnDConstants';
import { knightImage } from '../constants';
import { useDispatch } from 'react-redux';
import { toggleShowPotentialMoves } from '../redux/actions/gameActions';

interface props {
  style?: React.CSSProperties,
  
};

const Knight : React.FC<PropsWithChildren<props>> = () => {
  const dispatch = useDispatch();

  const [ { isDragging }, drag, preview] = useDrag({
    item: {type: ItemTypes.KNIGHT},
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    })
  })

  return (<>
    <DragPreviewImage connect={preview} src={knightImage} />
    <Wrapper data-css='Knight'
      ref={drag}
      isDragging={isDragging}
      onMouseUp={(e) => {
        if(!isDragging) {
          console.log('%c test', 'background: black; color: red')
          e.stopPropagation()
          dispatch(toggleShowPotentialMoves())
        }
      }}
    >
      {/* <p> */}
        ♘
        {/* </p> */}
    </Wrapper>
  </>)
}

export default Knight;

const Wrapper = styled.div<{isDragging : boolean}>`
  opacity: ${props => props.isDragging ? '0.5' : '1'};
  width: fit-content;
  height: fit-content;
  text-align: center;
    font-size: 25px;
    font-weight: bold;
    cursor: move;
    line-height: 100%;
`;