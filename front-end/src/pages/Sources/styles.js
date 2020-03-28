import styled from "styled-components";

const getStyle = type => {
    if (type === "sources") {
        return `
     
     
     
    `;
    }
};

export const Button = styled.button `
  width: 350px;
  height: 200px;
  background: green;
  border-radius: 25px;
  margin: 10px;
  color: white;
  cursor: pointer;
  ${({ type }) => getStyle(type)}
`;

export const Container = styled.div `
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  padding: 0 2%;
  display: 1;
`;

// export const SourcesDiv = styled.div `
//   width: 100%;

//   height: 100%;
//   background-color: rgb(45, 146, 235);
// `;