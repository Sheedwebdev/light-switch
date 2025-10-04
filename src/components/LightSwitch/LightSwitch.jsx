import React from 'react';
import styled from 'styled-components';
  
  
  
  function LightSwitch() {
    const [isOn, setIsOn] = React.useState(false);

    const handleToggle = () => {
      setIsOn(!isOn);
    };

    const switchImgSrc = isOn ? "/img/light-switch-on.svg" : "/img/light-switch-off.svg";
    const switchAltText = isOn ? "light switch on" : "light switch off";
    const BulbImgSrc = isOn ? "/img/light-bulb-lit.svg" : "/img/light-bulb-unlit.svg";
    const BulbAltText = isOn ? "light bulb on" : "light bulb off";

    return (
      <>
      <Wrapper on={isOn}>
        <Card>
          <SwitchImg onClick={handleToggle} src={BulbImgSrc} alt={BulbAltText} />
          <SwitchImg onClick={handleToggle} src={switchImgSrc} alt={switchAltText} />
        </Card>
      </Wrapper>
      </>
    );
  };

  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: ${( {on} ) => 
    on ? "hsl(0deg 0% 100%)" : "hsl(0deg 0% 0%)"};
  `;

  const SwitchImg = styled.img`
    width: 150px;
    height: 250px;
  `;

  const Card = styled.div`
  display: flex;
  height: 500px;
  width: 350px;
  background: hsl(240deg 100% 40%);;
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