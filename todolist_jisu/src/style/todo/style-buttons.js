import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { StylesProvider } from "@material-ui/core";

const CustomColorButton = styled.button`
  color: white;
  background-color: ${(props) => props.color || "#AC92ED"};
`;

function CTColorButton({ children, color, className }) {
  return (
    <CustomColorButton className={className} color={color}>
      {children}
    </CustomColorButton>
  );
}

// mui 기본 옵션들 의 경우 attrs를 통해 넣을 수 있음
const MaterialColorButton = styled(Button).attrs({
  size: "small",
})`
  color: white;
  background-color: ${(props) => props.color || "#AC92ED"};
`;

function MUColorButton({ children, color, className }) {
  return (
    <StylesProvider injectFirst>
      <MaterialColorButton className={className} color={color}>
        {children}
      </MaterialColorButton>
    </StylesProvider>
  );
}

export { CTColorButton, MUColorButton };

/*Warning: React.jsx: type is invalid -- expected a string 
(for built-in components) or a class/function 
(for composite components) but got: object.*/
/*
1) export default 인 경우(무조건)
-> export default component | import component
2) export 인 경우(무조건)
-> export {component} | import {component}
*/
