import React from 'react';
import LightSwitch from '../LightSwitch/LightSwitch';
import styled from 'styled-components';

function App() {
  return (
    <>
        <Card>
          <LightSwitch />
        </Card>
    </>
  );
}

const Card = styled.div`
  display: flex;
  height: 500px;
  width: 400px;
  margin: 0px 500px;
  background: hsl(0deg 0% 100%);;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 15px 0px hsl(0deg 0% 83%), -5px -5px 15px 0px hsl(0deg 0% 83%);
`;

export default App;
