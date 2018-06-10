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
    // border-bottom: 1px solid #d9335b;
    font-size: 2em;
    padding-right: 2em;
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

const Linky = styled.div`
    padding-right: 2em;
    font-size: 0.8em;
    float: right;
    & a {
       color: #95b0b4;
    }
`;
const Ingress = ({}) => (
    <Ing className="grid grid-gutters ">
        <Right className="grid-cell ">
            Tämä on Tehyn Kymenlaakson alueen ammattiosastojen yhteinen muutosinfokirje
    </Right>
        <Left className="grid-cell ">
            <h3>RAKE-ryhmä?</h3>
            Alueellinen rakennemuutos- eli RAKE-ryhmä, jonka keskeisenä tehtävänä on selvittää muutoksen vaikutukset tehyläisiin ja vastata niihin. Ryhmän tehtävänä on sopia ja valita edustajia työryhmiin, joissa henkilöstöä koskevia asioita käsitellään. <Linky><Link to="/rake/">Lue lisää...</Link></Linky>
    </Left>
    
    
</Ing>

);


export default Ingress;