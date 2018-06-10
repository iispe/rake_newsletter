import React from "react";
import styled from "styled-components";

const IconL = styled.div`
    background-color: #D9335B;
    color: white;
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
    position: absolute;
    border: 3px solid white;
    border-radius: 50%;
    box-shadow: 0 3px 4px #aaa; 
    height 45px;
    width: 45px;
    top: -20px;
    right: -5px;

    @media (max-width: 720px){
        top: -20px;
        left: -5px;
    }
`;

const Icon = (props) => (
    <IconL>
        {props.content}
    </IconL>

); 


export default Icon;