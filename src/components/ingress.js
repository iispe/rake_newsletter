import React from "react";
import styled from "styled-components";

const Ing = styled.div`
    background-color: #364f74;
    background-image: linear-gradient(to bottom, #364f74, #3a5376, #3f5778, #435a79, #485e7b);
    color: #009dab;
    text-shadow: 0px 2px 2px #222;
    padding: 2em 2em 2em;
    margin-bottom: 6em;
    border-bottom: 3px solid #009dab;
    
`;

const Right = styled.div`
    border-right: 5px solid #009dab;
    & p {
        font-weight: bold;
        font-size: 2em;
        
        padding-top: 0.5em;
        // border-top: 1px solid #009dab;
        // border-bottom: 1px solid #009dab;
    }
    & div {
        font-size: 0.8em;
        padding-right: 5em;
        color: white;
        
    }
    @media (max-width: 720px) {
        border: none;
        
    }

    @media (max-width: 420px) {
        padding-bottom: 3em;
        border-bottom: 20px dotted #009dab;
    }
`;

const Left = styled.div`
    padding: 6.5em 0 0 3em;;
    color: white;
    font-size: 1.2em;
    
    & h3{
        font-weight: bold;
        
        text-decoration: underline;
        color: #09c3a0;
    }

    @media (max-width: 420px) {
        padding-top: 2em;
    }
`;


const Ingress = ({}) => (
    <Ing className="grid grid-gutters ">
        <Right className="grid-cell ">
            <p>Muutos. Tulevaisuus. Tehyläisyys.</p>
            <div>Uusi maakunta Tehyläisin silmin</div>
    </Right>
        <Left className="grid-cell ">
           Tietoa tulevasta muutoksesta ja uudesta maakunnasta Tehyn rake-ryhmän toimittamana. 
    </Left>
    
    
</Ing>

);


export default Ingress;