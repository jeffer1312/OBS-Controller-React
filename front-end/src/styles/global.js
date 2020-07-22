import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline:0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  background-color: #183642;
  -webkit-font-smoothing: antialiased !important;
}
body html #root {
    height: 100%;
  }
`;
