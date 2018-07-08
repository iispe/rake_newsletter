import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

import Container from "../components/container";

const SubPageContainer = styled.div`
   margin: 0 auto;
   background-color: #ddd;
   padding: 0 1em; 
   
`;

const Navigation = styled.div`
    padding: 0.3em 1em;
    font-size: 0.8em;
    text-transform: uppercase;
    background-color: #eee;
    
`;

const SubPageHeader = styled.div`
    background-color: #fff;
    color: #000;
    border: 1px solid #bbb;
    border-top: 25px solid #009dab;
    border-radius: 5px; 
    padding: 1em 2em;
    margin: 0 auto;
    max-width: 920px;
   & p {
         margin: 0 auto;
       
   }
    
`;

const TextP = styled.div`
    font-size: 1.4rem;
    padding-top: 15px;
    padding-bottom: 15px;

    @media screen and (max-width: 920px) {
       font-size: 1.2rem;
   }
`;

const MainText = styled.div`
    margin: 3px auto 0;
    padding: 1em 2em;
    max-width: 920px;
    border: 1px solid #bbb;
    background-color: #fff;
    & h3 {
    margin: 0.7em 0 1em 0;
}
`;

const Highlight = styled.span`
    color: #009dab;
    
`;

const First = styled.span`
    color: #D9335B;
    font-size: 1.2rem
    font-weight: bold;
    text-transform: uppercase;
    &:before {
        content: "/ ";
    }
`;
export default () => (
    <Container>
        <Navigation>
            <Link to="/"> {"<"} Takaisin etusivulle </Link>
        </Navigation>
        <SubPageContainer>
                <TextP>
                    <SubPageHeader>
                        <p>Rakennemuutos maakunnassa on suuri ja sen vaikutukset ovat merkittäviä Tehyläiselle henkilöstölle.
                    Kymenlaakson Tehy Rake -ryhmä ja ammattiosastojen puheenjohtajisto, sekä luottamusmiehet ja työsuojeluvaltuutetut kokoontuvat säännöllisesti yhdessä tai puheenjohtajat erikseen. Samoin muiden ammattijärjestöjen tapaamiset ovat säännöllisiä, neuvottelijat heidän kanssa ovat Tehyltä <Highlight>henkilö1, henkilö2 ja henkilö3.</Highlight></p>
                    </SubPageHeader>
            
                    <MainText>
                    <h3>Rake-ryhmän tehtäviä:</h3>
            
                    <p><First>Taata</First> henkilöstön laaja osallistuminen valmistelutyöryhmiin, tehdä valinnat, tukea Tehyläisiä edustajia, tehdä verkosto / yhteistyötä muiden ao:n ja ammattijärjestöjen kesken. </p>
                    <p><First>Järjestää</First> erilaisia tapaamisia, tehdä suunnitelmia ja ennakoivasti vaikuttaa muutoksen vaikutuksiin Tehyläiseen jäsenistöön liittyen.</p>
                    <p><First>Tehdä</First> lausuntoja ja kannanottoja, noudattaen Tehyn lausuntojen sisältöä.</p>
                    <p><First>Vaikuttaa</First> henkilöstöedustuksen kautta valmisteluelimien työhön.</p>
                    <p><First>Tarkentaa</First> neuvottelutavoitteita. </p>
                    <p><First>Valvoa</First> YT toteutumista liikkeenluovutukseen liittyen. </p>
                    <p><First>On mukana</First> vaikuttamassa / päättämässä paikallistensopimusten ja muiden eri työnantajien kesken sovittujen käytänteiden siirtymisestä (tärkeydestä / tarpeesta jäsenistöömme liittyen).</p>
                    <p><First>Valvoa</First> ja vaikuttaa palkkaharmonisointi asiaan</p>
                    <p><First>Tiedottaa</First> jäsenistölle</p>
                    <p><First>Huolehtia</First> lm ja tsv organisoitumisen käynnistymisestä </p>
                    </MainText>
                </TextP>
        </SubPageContainer>
        <Navigation>
            <Link to="/"> {"<"} Takaisin etusivulle </Link>
        </Navigation>
 </Container>

);