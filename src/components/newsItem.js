import React from "react";
import styled from "styled-components";



const Item = styled.div`
    flex: 1;
    position: relative;
    color: #2F4858;
    margin-right: 10px;
    margin-bottom: 20px;
    padding: 1.5em 1em 0.5em 1em;
    border: 1px solid #ccc;
    border-top: 3px solid #D9335B;
    border-radius: 3px;
    box-shadow: 0 5px 10px #ccc;
    background-color: #fff;
    & p {
       text-align: left;
                
    }
    & span {
        color: rgba(217,51,91, 1);
        font-weight: bold;
       
    }
   
`;

const NewsItem = ({children}) => (
    <Item className="grid-cell">
        {children}
    </Item>
)

export default NewsItem