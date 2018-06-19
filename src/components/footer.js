import React from "react";
import styled from "styled-components";


const Foot = styled.div`
    
    font-size: 0.8em;
    color: #fff;
    background-color: #009dab;
    // padding-bottom: 2rem;
    height: 100%;
    // box-shadow: 0 0px 10px #6a6a6a;
    
    & p {
        
        
    }
`;

const FooterWrapper = styled.div`
    margin: 0 auto;
    text-align: center;
    padding: 1em;
    max-width: 920px;
    
`;

const Footer = ({ }) => (
    <Foot >
        <FooterWrapper>
            <div>Seuraava tiedote ilmestyy elo-/syyskuussa - Tehyn Kymenlaakson ammattiosastot 2018 </div>
        
        </FooterWrapper>  
    </Foot>
);
export default Footer;