import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

const Navigation = styled.div`
    padding: 0.3em 3em;
    font-size: 0.8em;
    text-transform: uppercase;
`;

const Otsake = styled.div`
    background-color: #364f74;
    color: #009dab; 
    padding: 1em 2em;
`;

const TekstiOsa = styled.div`
    
     
    
    font-size: 1.2em;
    text-align: center;
`;
export default () => (
    <div>
        <Navigation>
            <Link to="/"> Takaisin etusivulle </Link>
        </Navigation>
        <TekstiOsa>
            <Otsake>
                <p>Rakennemuutos maakunnassa on suuri, vaikutukset merkittäviä Tehyläiselle henkilöstölle</p>
                <p>Kymenlaakson Tehy ”Rake ryhmä” ja ao puheenjohtajisto, sekä lm:t tsv:t kokoontuvat säännöllisesti yhdessä tai pj:t erikseen. Samoin muiden ammattijärjestöjen tapaamiset ovat säännöllisiä, neuvottelijat heidän kanssa ovat Tehyltä Eija Lantta, Asta Nurminen ja Marja-Riitta Mänttäri.</p>
            </Otsake>
    
            <h3>Rake-ryhmän tehtäviä:</h3>
    
            <p>Taata henkilöstön laaja osallistuminen valmistelutyöryhmiin, tehdä valinnat, tukea Tehyläisiä edustajia, tehdä verkosto / yhteistyötä muiden ao:n ja ammattijärjestöjen kesken. Järjestää erilaisia tapaamisia, tehdä suunnitelmia ja ennakoivasti vaikuttaa muutoksen vaikutuksiin Tehyläiseen jäsenistöön liittyen.</p>
            <p>Tehdä lausuntoja ja kannanottoja, noudattaen Tehyn lausuntojen sisältöä. Vaikuttaa henkilöstöedustuksen kautta valmisteluelimien työhön.</p>

            <p>
                Tarkentaa neuvottelutavoitteita. Valvoa YT toteutumista liikkeenluovutukseen liittyen. On mukana vaikuttamassa / päättämässä paikallistensopimusten ja muiden eri työnantajien kesken sovittujen käytänteiden siirtymisestä (tärkeydestä / tarpeesta jäsenistöömme liittyen).</p>

            <p>Valvoo ja vaikuttaa palkkaharmonisointi asiaan</p>
            <p>Tiedottaa jäsenistölle</p>
            <p>Lm ja tsv organisoitumisen käynnistymisestä huolehtiminen</p>
        
    </TekstiOsa>
 </div>

);