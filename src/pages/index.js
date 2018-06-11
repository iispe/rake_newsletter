import React from "react";
import styled from "styled-components";

import Icon from "../components/icon";
import Ingress from "../components/ingress";
import NewsItem from "../components/newsItem";


const Section = styled.section`
    padding: 0 2em;
    &:nth-child(3) {
        border-top: 3px solid #D9335B;
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
    // border: 1px solid #ccc;
    max-width: 1020px;
    font-size: 1.2em;
    // border-top: 5px solid #2f4858;
    // border-bottom: 5px solid #2f4858;
    color: #888;
    
    // max-width: 110%;
    margin: 20px auto 0;
    border-radius: 0 0 7px 7px ;
    padding: 1em;
    
    
        h2 {
            text-align: center;
        }
    
`;

const ContactInfo = styled.p`
        font-size: 0.6em;
        color: #009dab;
        padding-bottom: 0.5em;
        font-weight: bold;
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
                <p><span>Liikkeenluovutuksessa</span> työntekijä siirtyy entisin ehdoin uuden työnantajan palvelukseen. Näin ollen lomaoikeudet, eläkeoikeudet ja säästövapaat säilyvät toistaiseksi ennallaan.</p> 
                <Icon content="2" />
            </NewsItem> 
           
            <NewsItem>
                <p><span>Uudella työnantajalla</span> palkat tullaan harmonisoimaan myöhemmin ilmoitetun aikataulun mukaisesti.</p>  
                <Icon content="3" />  
            </NewsItem> 
        </News>
        <News className="grid grid-gutters grid--full large-grid--fit">
            <NewsItem >
                <p>Lorem ipsum</p>   
                <Icon content="4" /> 
            </NewsItem> 
            <NewsItem>
                <p>Lorem ipsum</p>  
                <Icon content="5" />  
            </NewsItem> 
        </News>
    </Section>
    <Section>
        <ContactContainer>
           
                <h2>YHTEYSTIEDOT</h2>
            <div className="table">
            <ul>
                        <li><p className="contactHead">AO 400</p><ContactInfo>etunimi.sukunimi@carea.fi</ContactInfo><p> Nina Wicht</p><p>Eija Lantta</p></li>
                        <li><p className="contactHead">AO 401</p><ContactInfo>etunimi.sukunimi@carea.fi</ContactInfo><p>Pekka Iiskola</p><p>Kirsi Kekki</p><p>Jaana Salovaara</p></li>
                        <li><p className="contactHead">AO 404</p><ContactInfo>etunimi.sukunimi@carea.fi</ContactInfo><p>Paula Werning</p><p>Tarja Kanerva</p></li>
                        <li><p className="contactHead">AO 406</p><ContactInfo>etunimi.sukunimi@kotka.fi</ContactInfo><p>Kirsi Soidinsalo</p><p>Marja-Riitta Mänttäri</p></li>
                        <li><p className="contactHead">AO 408</p><ContactInfo> etunimi.sukunimi@hamina.fi</ContactInfo><p>Marianne Närhi</p><p>Katri Hannola</p></li>
                
            </ul>
            </div>
        </ContactContainer>
    </Section>
</div>
);


