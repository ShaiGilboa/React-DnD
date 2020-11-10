import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../DnDConstants';

interface props {
  style?: React.CSSProperties,
  
};

const Knight : React.FC<PropsWithChildren<props>> = () => {

  const [ { isDragging }, drag] = useDrag({
    item: {type: ItemTypes.KNIGHT},
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    })
  })

  return (
    <Wrapper data-css='Knight'
      ref={drag}
      isDragging={isDragging}
    >
      {/* <p> */}
        ♘
        {/* </p> */}
    </Wrapper>
  )
}

export default Knight;

const Wrapper = styled.div<{isDragging : boolean}>`
  opacity: ${props => props.isDragging ? 0.5 : 1};
  background-color: transparent;
  width: fit-content;
  height: fit-content;
  /* p{ */
    font-size: 25px;
    font-weight: bold;
    cursor: move;
  /* } */
`;