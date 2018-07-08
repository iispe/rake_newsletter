import React from "react";
import styled from "styled-components";

import Contact from "../components/contact";
import Icon from "../components/icon";
import Ingress from "../components/ingress";
import Links from "../components/links";
import NewsItem from "../components/newsItem";


const Section = styled.section`
    padding: 0 2em;
    &:nth-child(3) {
        border-top: 3px solid #D9335B;
        border-bottom: 3px solid #009dab;
        padding: 10px 0 10px 0;
        margin: 3em 0 0 0;
        min-height: 320px;
        background-color: #333;
    }
    
`;

const News = styled.div`
    margin: 0 auto;
    display: flex;
    flew-wrap: wrap;
    max-width: 920px;

    @media screen and (max-width: 920px) {
        flex-direction: column;
    }

`;

const NewsHeader = styled.div`
    font-size: 1.4em;
    text-align: center;
    margin-bottom: 70px;
    border-bottom: 1px solid #eee;

`;



export default () => (
    <div>
        <Ingress />
        <Section>
        <News>
            <NewsHeader>
                <p>Kymenlaaksoon on tulossa vuoden 2019 alusta yksi terveyden- ja sosiaalihuollon palveluntuottaja, riippumatta siitä valmistuuko sote- ja valinnanvapauslaki.</p>
                <p>Tulevan maakunnan suunnittelutyössä on ollut ja on edelleen mukana useita tehyläisiä henkilöstönedustajia eri työryhmissä, niin soteen kuin maakuntaankin liittyen.</p><p>Alla lyhyt muistilista miten muutos tulee näkymään käytännössä meille työntekijöille ja miten muutokseen voi valmistautua.</p>
            </NewsHeader>
        </News>
       
        <News>
            
            <NewsItem>                
                <p><span>Muistathan</span>, että sinun ei tarvitse allekirjoittaa uutta työsopimusta siirtyessäsi liikkeenluovutuksella uudelle työnantajalle.</p>  
                <Icon content="1" />
            </NewsItem> 
                <NewsItem>
                    <p><span>Työnantajan</span> pitää jokatapauksessa noudattaa vanhoja työsuhteen ehtoja, jos uutta sopimusta ei allekirjoiteta.</p>
                    <Icon content="2" />
                </NewsItem> 
                <NewsItem >
                    <p><span>Jos haluat</span> allekirjoittaa sinulle tarjotun uuden työsopimuksen, varmista, että kaikki merkittävät ehdot säilyvät samantasoisina kuin aikaisemmin. Paremman työsopimuksen saa toki allekirjoittaa.</p>
                    <Icon content="3" />
                </NewsItem> 
        </News>
        <News>
                
                <NewsItem>
                    <p><span>Liikkeenluovutuksessa</span> työntekijä siirtyy entisin ehdoin uuden työnantajan palvelukseen. Näin ollen lomaoikeudet, eläkeoikeudet ja säästövapaat säilyvät toistaiseksi ennallaan.</p>
                    <Icon content="4" />
                </NewsItem> 
                <NewsItem>
                    <p><span>Siirrä</span> kaikki omat tiedostosi turvaan työkoneelta (koulutusmateriaalit, kehityskeskustelut ym). Uudella työnantajalla tietojärjestelmät muuttuu ja käyttöoikeus vanhoihin tiedostoihin voi päättyä.</p>
                    <Icon content="5" />
                </NewsItem> 
        </News>
        
    </Section>
    <Section>
        <Contact />
    </Section>
    <Section>
        <Links />
    </Section>
</div>
);


