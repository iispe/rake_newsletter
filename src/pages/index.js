import Link from "gatsby-link";
import React from "react";
import styled from "styled-components";


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
    max-width: 920px;
`;

const NewsHeader = styled.div`
    font-size: 1.4em;
    text-align: center;
    margin-bottom: 70px;
    border-bottom: 1px solid #eee;

`;

const ContactContainer = styled.div`
    max-width: 920px;
    font-size: 1.2em;
    border-radius: 5px;
    color: #888;
    margin: 10px auto 0;
    padding: 1em;
        h2 {
            text-align: center;
        }
`;

const Rake = styled.div`
        padding: 0.5em 2em 2em;
        color: #eee;
        margin: 0 auto 2em;
        background-color: #364f74;
        border-radius: 0 0 15px 15px;
        box-shadow: 0 4px 6px #222;
        font-size: 1rem;
        @media (max-width: 420px) {
            padding-bottom: 2em;
        }
`;

const Contact = styled.div`
        color: #ddd;
        padding: 1em 1em 2em;
        & ul {
            list-style-type: none;
            /* border-top: 3px solid #666; */
            display: inline-block;
        }
        & li {
            float: left;
            line-height: 70%;
            padding: 1em 1em;
        }
        & li p:hover {
            color: #ccc;
    }
}
       
`;
const ContactInfo = styled.p`
        font-size: 0.6em;
        color: #009dab;
        padding-bottom: 0.5em;
        font-weight: bold;
`; 

const Button = styled.button`
    background-color: #009dab;
    display: inline-block;
    font-size: 0.7em;
    font-weight: bold;
    padding: 0.2em 2em;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 1px 1px #222;
    // vertical-align: base-line;
    color: #ddd;
    // float: right;
    &:hover {
        box-shadow: none;
    }
`;

export default () => (
    <div>
        <Ingress />
        <Section>
        <News className="grid grid-gutters grid--full large-grid--fit">
            <NewsHeader>
                <p>Kymenlaaksoon on tulossa vuoden 2019 alusta yksi terveyden- ja sosiaalihuollon palveluntuottaja, riippumatta siitä valmistuuko sote- ja valinnanvapauslaki.</p>
                <p>Tulevan maakunnan suunnittelutyössä on ollut ja on edelleen mukana useita tehyläisiä henkilöstönedustajia eri työryhmissä, niin soteen kuin maakuntaankin liittyen.</p><p>Alla lyhyt muistilista miten muutos tulee näkymään käytännössä meille työntekijöille ja miten muutokseen voi valmistautua.</p>
            </NewsHeader>
        </News>
       
        <News className="grid grid-gutters grid--full large-grid--fit">
            
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
        <News className="grid grid-gutters grid--full large-grid--fit">
                
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
        <ContactContainer>
                <h2>Tehyn RAKE-ryhmä</h2>
            
            <Contact>
                {/* <h4>KYMENLAAKSON TEHYN RAKERYHMÄN YHTEYSTIEDOT</h4> */}
                <div className="table">
                <ul>
                            <li><p className="contactHead">AO 400</p><ContactInfo>etunimi.sukunimi@carea.fi</ContactInfo><p> Nina Wicht</p><p>Eija Lantta</p></li>
                            <li><p className="contactHead">AO 401</p><ContactInfo>etunimi.sukunimi@carea.fi</ContactInfo><p>Pekka Iiskola</p><p>Kirsi Kekki</p><p>Jaana Salovaara</p></li>
                            <li><p className="contactHead">AO 404</p><ContactInfo>etunimi.sukunimi@carea.fi</ContactInfo><p>Paula Werning</p><p>Tarja Kanerva</p></li>
                            <li><p className="contactHead">AO 406</p><ContactInfo>etunimi.sukunimi@kotka.fi</ContactInfo><p>Kirsi Soidinsalo</p><p>Marja-Riitta Mänttäri</p></li>
                            <li><p className="contactHead">AO 408</p><ContactInfo> etunimi.sukunimi@hamina.fi</ContactInfo><p>Marianne Närhi</p><p>Katri Hannola</p></li>
                    
                </ul>
                </div>
            </Contact>
                <Rake>
                    <h4>Rake-ryhmä?</h4>
                    <p>Alueellinen rakennemuutos- eli RAKE-ryhmä, jonka keskeisenä tehtävänä on selvittää muutoksen vaikutukset tehyläisiin ja vastata niihin. Ryhmän tehtävänä on sopia ja valita edustajia työryhmiin, joissa henkilöstöä koskevia asioita käsitellään.</p>
                    <Link to="/rake/"><Button>LUE LISÄÄ</Button></Link>
                </Rake>
        </ContactContainer>
    </Section>
    <Section>
        <Links />
    </Section>
</div>
);


