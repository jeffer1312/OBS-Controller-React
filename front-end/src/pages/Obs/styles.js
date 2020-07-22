import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 1360px;
  height: 100%;
  max-height: 85vh;
  overflow: hidden;
  padding: 0 2%;
  margin: 0 auto;

  @media (max-width: 1268px) {
    max-width: 1000px;
  }
  @media (max-width: 960px) {
    max-width: 700px;
  }
  @media (max-width: 652px) {
    max-width: 500px;
  }
`;
export const ContainerStream = styled(Container)`
  margin-top: 3%;
  height: 100%;
  max-height: 10vh;
  @media (max-width: 1268px) {
    display: none;
  }
  @media (max-width: 652px) {
    display: none;
  }
  @media (max-height: 860px) {
    display: none;
  }
`;
export const Scenes = styled.div`
  text-align: center;
  margin: 5%;
`;
export const Footer = styled.footer`
  position: absolute;
  bottom: 0px;
  left: 50%;

  transform: translate(-50%);
  border-top: 14px solid #313d5a;
  border-left: 14px solid #313d5a;
  border-right: 14px solid #313d5a;
  width: 35vw;
  height: 10vh;
  @media (max-width: 1268px) {
    width: 50vw;
    height: 10vh;
  }
`;
export const Button = styled.button`
  height: ${(props) => (props.active ? "220px" : "160px")};
  width: ${(props) => (props.active ? "220px" : "160px")};

  background-color: #1fc8db;
  background-image: linear-gradient(
    141deg,
    #9fb8ad 0%,
    #1fc8db 51%,
    #2cb5e8 75%
  );
  color: #fbf5f3;
  border: 0;
  border-radius: 50px;
  transition: 0.5s;
  -webkit-box-shadow: 0px 0px 19px 5px rgba(168, 150, 168, 1);
  -moz-box-shadow: 0px 0px 19px 5px rgba(168, 150, 168, 1);
  box-shadow: 0px 0px 19px 5px rgba(168, 150, 168, 1);
  margin: 20px;
  &:hover {
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 10px 2px rgba(30, 160, 240, 1);
    -moz-box-shadow: 0px 0px 10px 2px rgba(30, 160, 240, 1);
    box-shadow: 0px 0px 10px 2px rgba(30, 160, 240, 1);
    height: 220px;
    width: 220px;
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 1268px) {
    height: ${(props) => (props.active ? "200px" : "140px")};
    width: ${(props) => (props.active ? "200px" : "140px")};
    border-radius: 25px;
    &:hover {
      height: 180px;
      width: 180px;
    }
  }
  @media (max-width: 1030px) and (max-height: 860px) {
    height: ${(props) => (props.active ? "140px" : "80px")};
    width: ${(props) => (props.active ? "140px" : "80px")};
    border-radius: 10px;
    &:hover {
      height: 120px;
      width: 120px;
    }
  }
  @media (max-width: 960px) {
    height: ${(props) => (props.active ? "180px" : "120px")};
    width: ${(props) => (props.active ? "180px" : "120px")};
    border-radius: 10px;
    &:hover {
      height: 140px;
      width: 140px;
    }
  }
  @media (max-width: 655px) {
    height: ${(props) => (props.active ? "150px" : "110px")};
    width: ${(props) => (props.active ? "150px" : "110px")};
    border-radius: 10px;
    &:hover {
      height: 140px;
      width: 140px;
    }
  }
`;
export const ButtonControls = styled.button`
  height: 60px;
  width: 120px;
  background-color: ${(props) => (props.trasmission ? "#399E5A" : "#73628A")};
  color: white;
  border-radius: 10px;
  margin-left: 15px;
  &:hover {
    cursor: pointer;

    height: 80px;
    width: 140px;
  }
  &:focus {
    outline: none;
  }

  @media (max-width: 960px) {
    height: 30px;
    width: 80px;
  }
  @media (max-width: 652px) {
    height: 30px;
    width: 80px;
  }
  @media (max-width: 1030px) {
    height: 30px;
    width: 90px;
    border-radius: 5px;
    &:hover {
      cursor: pointer;

      height: 40px;
      width: 100px;
    }
  }
`;
export const Title = styled.h1`
  color: #fbf5f3;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  top: 0;
  margin: 15px;
`;
export const Controls = styled.div`
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
`;

export const TimeStream = styled.div`
  height: 4vh;
  color: #fbf5f3;
  align-self: center;
`;
export const KeyButton = styled.button`
  margin-bottom: 2%;
  width: 8%;
  height: 8%;
  border-radius: 5px;
  align-self: center;
  background-color: #c42021;
  color: #fbf5f3;
`;
export const InputKey = styled.input`
  width: 55%;
  height: 6%;
  padding-left: 0.7%;
  align-self: center;
  background-color: #fbf5f3;
  border-radius: 18px;
`;
