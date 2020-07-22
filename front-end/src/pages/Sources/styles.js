import styled from "styled-components";
export const SourcesDiv = styled.div`
  position: relative;
  margin-top: 10%;
`;

export const Button = styled.button`
  height: ${(props) => (props.active ? "220px" : "160px")};
  width: ${(props) => (props.active ? "220px" : "160px")};

  border-radius: 50px;
  transition: 0.5s;
  margin: 10px;

  color: white;
  cursor: pointer;
  /* background-color: #1fc8db; */
  background-color: ${(props) => (props.visible ? "#1fc8db" : "#f00")};
  /*  */
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
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;

  padding: 0 2%;
  height: 100%;
  display: flex;

  justify-content: center;
`;

// export const SourcesDiv = styled.div `
//   width: 100%;

//   height: 100%;
//   background-color: rgb(45, 146, 235);
// `;
