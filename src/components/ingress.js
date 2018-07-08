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
    display: flex;
    flex-wrap: wrap;
    
    @media screen and (max-width: 920px) {
        flex-direction: column;
        margin-bottom: 2em;
    }
`;

const Right = styled.div`
    border-right: 5px solid #009dab;
    flex: 2;
    & p {
        font-weight: bold;
        font-size: 2em;
        padding-top: 0.5em;
        
    }
    & div {
        font-size: 0.8em;
        padding-right: 5em;
        color: white;
        
    }
    @media (max-width: 920px) {
        flex: 1;
       border: none;
        padding-bottom: 3em;
       
        
    }

    
`;

const Left = styled.div`
    flex: 1;
    padding: 3.5em 0 0 3em;;
    color: white;
    font-size: 1.2em;
    
    & h3{
        font-weight: bold;
        
        text-decoration: underline;
        color: #09c3a0;
    }

    @media (max-width: 920px) {
        padding: 1em;
        background: #009dab;
        border-radius: 30px 30px 30px 0;
        box-shadow: 0 5px 10px #333;
    }
`;


const Ingress = ({}) => (
    <Ing>
        <Right>
            <p>Muutos. Tulevaisuus. Tehyläisyys.</p>
            <div>Uusi maakunta Tehyläisin silmin</div>
    </Right>
        <Left>
           Tietoa tulevasta muutoksesta ja uudesta maakunnasta Tehyn rake-ryhmän toimittamana. 
    </Left>
    
    
</Ing>

);


export default Ingress;