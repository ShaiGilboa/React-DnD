import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

interface props {
  style?: React.CSSProperties,
  
};

const Knight : React.FC<PropsWithChildren<props>> = () => {

  return (
    <Wrapper data-css='Knight'>
      ♘
    </Wrapper>
  )
}

export default Knight;

const Wrapper = styled.div`
  /* color: red; */
`;