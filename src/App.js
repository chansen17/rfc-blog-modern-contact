import { useState } from 'react';
import styled from 'styled-components';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FaTwitter, FaEnvelope, FaTimes } from 'react-icons/fa';

function App() {

  // state
  const [email] = useState('youremail@gmail.com');
  const [copied, setCopy] = useState(false);
  const [toggled, setToggled] = useState(null);

  // modal logic 
  const handleModal = () => {
    setToggled(!toggled);
  }

  return (
    <Main>
    {!toggled && <ModalBtn onClick={handleModal}>Contact Me</ModalBtn> }
    {toggled && (
      <StyledContact>
      <CloseModalBtn onClick={handleModal}><FaTimes/></CloseModalBtn>
      <BackDrop/>
      <Content>
        <Heading>Get in Touch</Heading>

        <CopyToClipboard text={email}
        onCopy={() => setCopy(true)}>
        <Button><FaEnvelope className="icon" style={{ marginRight: ".5rem", fontSize: "1.5rem"}}/> Drop me a line</Button>
        </CopyToClipboard>

        <ButtonLink target="_blank" rel="noreferrer" href="www.twitter.com"><FaTwitter className="icon" style={{ marginRight: ".5rem", fontSize: "1.5rem"}}/>Shoot me a tweet</ButtonLink>
        <br/>
        {copied && <span className="animate animate__animated animate__fadeOut animate__delay-2s">Copied email to clipboard</span>}
      </Content>
    </StyledContact>
    )}
    </Main>
  );
}

const ModalBtn = styled.button`
  max-width: 200px;
  width: 100%;
  outline: none;
  border: none;
  padding: .75rem;
  font-size: 1.75rem;
  background: slateblue;
  color: #eee;
  border-radius: 12px;
  cursor: pointer;
`;

const CloseModalBtn = styled.button`
  position: absolute;
  border: none;
  outline: none;
  background: none;
  height: 30px;
  width: 30px;
  color: #333;
  font-size: 1.25rem;
  padding: .25rem;
  z-index: 9;
  top: 1%;
  left: 1%;
  cursor: pointer;
`;

const Main = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 0 2rem;
`;

const BackDrop = styled.img`
    width: 50%;
    height: 40%;
    top: 20%;
    left: 15%;
    position: absolute;
    background-image: linear-gradient(27deg, slateblue, seagreen);
    animation: grow 3s linear infinite alternate-reverse;
    z-index: -1;
    @keyframes grow {
        0% {
            transform: scale(1) translateY(0); 
        }
        100% {
            transform: scale(1.2) translateY(-3px);
            filter: hue-rotate(90deg);
        }
    }
`;

const StyledContact = styled.div`
    overflow: hidden;
    max-width: 500px;
    width: 100%;
    min-height: 300px;
    border-radius: 12px;

    background-color: rgba(0,0,0,.3);
    position: relative;
    box-shadow: 5px 10px 30px #111;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: .5rem;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      backdrop-filter: blur(50px);
    }
`;

const Content = styled.div`
  color: #eee;
  z-index: 9;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  border: none;
  outline: none;
  padding: .75rem;
  background-color: rgba(255,255,255,.1);
  color: #eee;
  font-size: 1.25rem;
  display: flex;
  align-items: center;  
  max-width: 100%;
  width: 250px;
  border-radius: 15px;
  margin: .5rem 0;
  cursor: pointer;

  &:hover {
    transition: .2s all ease-in-out;
    background-color: rgba(255,255,255,.15);
    transform: translateY(-3px);

    .icon {
      transition: .3s all ease-in-out;
      transform: translateY(-3px) rotate(5deg);
      filter: drop-shadow(1px 5px 3px #222);
    }
  }
`;

const ButtonLink = styled.a`
  border: none;
  outline: none;
  padding: .75rem;
  background-color: rgba(255,255,255,.1);
  color: #eee;
  font-size: 1.25rem;
  display: flex;
  align-items: center;  
  max-width: 100%;
  width: 250px;
  border-radius: 15px;
  margin: .5rem 0;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transition: .2s all ease-in-out;
    background-color: rgba(255,255,255,.15);
    transform: translateY(-3px);

    .icon {
      transition: .3s all ease-in-out;
      transform: translateY(-3px) rotate(5deg);
      filter: drop-shadow(1px 5px 3px #222);
    }
  }
`;

export default App;
