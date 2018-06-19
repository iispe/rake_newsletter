import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

const Linkcontainer = styled.div`
    max-width: 920px;
    border-top: 25px solid #009dab;
    border-radius: 5px;
    box-shadow: 0 4px 6px #aaa;
    margin: 2em auto;
    padding: 2em 1em;

    & ul {
        list-style-type: none;
        width: 95%;
        margin: 0 auto;
       
    }
    & li a {
    display: block;
    color: #000;
    border-bottom: 1px solid #ddd;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    transition: all ease-in 150ms;
    
}
    & li a:hover {
        background-color: #009dab;
        color: white;
    }

    & h2 {
        text-align: center;
        
    }
    li:nth-child(1) {
        border-top: 3px solid #ccc;
        margin-top: 1em;
    }
`;


const Links = ({}) => (
    <Linkcontainer>
        <h2>Lisää tietoa muutoksesta </h2>
        <ul>
            <li><a href="http://alueuudistus.fi">Alueuudistus.fi</a></li>
            <li><a href="http://www.uusikymenlaakso.fi">Uusikymenlaakso.fi</a></li>
            <li><a href="http://www.carea.fi/fi/Tietoa%20Careasta/Kymenlaakson%20sairaanhoito-%20ja%20sosiaalipalvelujen%20kuntayhtym%C3%A4/Esityslistat/">Carea</a></li>
            
        </ul>
    </Linkcontainer>
);


export default Links;