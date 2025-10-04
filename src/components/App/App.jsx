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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: hsl(0deg 0% 0%);
`;

export default App;
