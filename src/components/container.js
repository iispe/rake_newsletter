import React from "react";
import styled from "styled-components";

const Cont = styled.div`
  margin: 0 auto;
  padding: 0;
  
`;

const Container = ({ children }) => (
    <Cont>
        {children}
    </Cont>
);

export default Container;