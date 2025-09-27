import React from 'react';
import styled from 'styled-components';
  
  
  
  function LightSwitch() {
    const [isOn, setIsOn] = React.useState(false);


    return (
      <>
        <Card>
          {isOn? <OnMessage>The Light is ON</OnMessage>: <OffMessage>The Light is OFF</OffMessage>}
          <Button onClick={() => {
            {!isOn? setIsOn(true): setIsOn(false)};
          }}>
            toggle
          </Button>
        </Card>
      </>
    );
  };

  const Card = styled.div`
  display: flex;
  height: 500px;
  width: 350px;
  background: hsl(0deg 0% 100%);;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 15px 0px hsl(0deg 0% 83%), -5px -5px 15px 0px hsl(0deg 0% 83%);
`;

  const Button = styled.button`
	background: hsl(45deg 100% 50%);
	color: hsl(0deg 0% 0%);
	padding: 20px 20px;
	border-radius: 8px;
	border: none;
	font-size: 1.5rem;
    font-weight: 900;
	cursor: pointer;

    &:hover {
        background: hsl(0deg 0% 0%);
        color: hsl(0deg 0% 100%);
    }
`;

  const Message = styled.p`
    font-size: 2rem;
    font-weight: 600;
  `;

  const OnMessage = styled(Message)`
    color: hsl(120deg 75% 30%);
  `;
  
  const OffMessage = styled(Message)`
    color: hsl(0deg 0% 50%);
  `;


  
export default LightSwitch;
