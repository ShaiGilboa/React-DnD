import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

interface props {
  style?: React.CSSProperties,
  color?: 'white' | 'black',
};

const Square : React.FC<PropsWithChildren<props>> = ({ color = 'white', children }) => {

  return (
    <Wrapper data-css='Square' color={color}>
      {children}
    </Wrapper>
  )
}

export default Square;

const Wrapper = styled.div<{color: 'black' | 'white'}>`
  background-color: ${props => props.color};
  color: ${props => props.color === 'black' ? 'white' : 'black'};
  width: 100%;
  height: 100%;
  outline: solid 1px black;
`;