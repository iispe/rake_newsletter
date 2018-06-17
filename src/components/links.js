import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

const Linkcontainer = styled.div`
    max-width: 920px;
    
    margin: 0 auto;
    padding: 2em 1em;

    & ul {
        list-style-type: none;
        width: 95%;
        margin: 0 auto;
       
    }
    & li a {
    display: block;
    color: #000;
    border-bottom: 1px solid #eee;
    padding: 8px 16px;
    text-decoration: none;
}
    & li a:hover {
        background-color: #364f74;
        color: white;
    }
`;


const Links = ({}) => (
    <Linkcontainer>
        <h3>Lisää tietoa muutoksesta </h3>
        <ul>
            <li><a href="http://alueuudistus.fi">Alueuudistus.fi</a></li>
            <li><a href="http://www.uusikymenlaakso.fi">Uusikymenlaakso.fi</a></li>
            <li><a href="http://www.carea.fi/fi/Tietoa%20Careasta/Kymenlaakson%20sairaanhoito-%20ja%20sosiaalipalvelujen%20kuntayhtym%C3%A4/Esityslistat/">Carea</a></li>
            
        </ul>
    </Linkcontainer>
);


export default Links;