import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
const Ing = styled.div`
    background-color: #364f74;
    color: #009dab;
    
    padding: 2em 2em 2em;
    margin-bottom: 6em;
    border-bottom: 3px solid #009dab;
    
`;

const Right = styled.div`
    
    font-weight: bold;
//   border-bottom: 1px solid ;
    font-size: 2em;
    padding-right: 2em;
    & p {
        padding: 0.5em 0;
        // border-top: 1px solid #009dab;
        border-bottom: 1px solid #009dab;
    }
`;

const Left = styled.div`
    padding-top: 6.5em;
    color: white;
    font-size: 1.2em;
    padding-left: 1em;
    & h3{
        font-weight: bold;
        text-decoration: underline;
        color: #95b0b4;
    }
`;

const Button = styled.button`
    background-color: #09c3a0;
    display: inline-block;
    font-size: 0.7em;
    font-weight: bold;
    padding: 0.2em 2em;
    border-radius: 5px;
    border: none;
   vertical-align: base-line;
    color: white;
`;
const Ingress = ({}) => (
    <Ing className="grid grid-gutters ">
        <Right className="grid-cell ">
            <p>Tämä on Tehyn Kymenlaakson alueen ammattiosastojen yhteinen muutosinfokirje</p>
    </Right>
        <Left className="grid-cell ">
            <h3>RAKE-ryhmä?</h3>
            <p>Alueellinen rakennemuutos- eli RAKE-ryhmä, jonka keskeisenä tehtävänä on selvittää muutoksen vaikutukset tehyläisiin ja vastata niihin. Ryhmän tehtävänä on sopia ja valita edustajia työryhmiin, joissa henkilöstöä koskevia asioita käsitellään.</p> 
            <Link to="/rake/"><Button>LUE LISÄÄ</Button></Link>
    </Left>
    
    
</Ing>

);


export default Ingress;