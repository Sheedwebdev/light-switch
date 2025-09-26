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
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default App;
