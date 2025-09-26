import React from 'react';
import styled from 'styled-components';
  
  
  
  function LightSwitch() {
    const [isOn, setIsOn] = React.useState(false);


    return (
      <>
        {isOn? <OnMessage>The Light is ON</OnMessage>: <OffMessage>The Light is OFF</OffMessage>}
        <button onClick={() => {
          {!isOn? setIsOn(true): setIsOn(false)};
        }}>
          toggle
        </button>
      </>
    );
  }

  const Message = styled.p`
    font-size: 2rem;
    font-weight: 600;
  `;

  const OnMessage = styled(Message)`
    color: hsl(120deg 100% 50%);
  `;
  
  const OffMessage = styled(Message)`
    color: hsl(0deg 0% 50%);
  `;


  
export default LightSwitch;
