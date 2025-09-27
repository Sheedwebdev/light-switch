import React from 'react';
import LightSwitch from '../LightSwitch/LightSwitch';
import styled from 'styled-components';

function App() {
  return (
    <>
      <Wrapper>
        <LightSwitch />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.body`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
