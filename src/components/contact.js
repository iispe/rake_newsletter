import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

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

const Contacts = styled.div`
        color: #ddd;
        font-size: 0.8em;
        //  border: 1px solid white;
        padding: 1em 1em 2em;
        & ul {
            list-style-type: none;
            width: 100%;
            display: table;
            margin-left: 0;
        }
        & li {
            display: table-cell;
            text-align: center;
            float: left;
            
            line-height: 70%;
            margin: 0 auto;
            padding: 1em 0.65em;
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

const Contact = () => (
<ContactContainer>
    <h2>Tehyn RAKE-ryhmä</h2>

    <Contacts>
        {/* <h4>KYMENLAAKSON TEHYN RAKERYHMÄN YHTEYSTIEDOT</h4> */}
        <div className="table">
            <ul>
                <li><p className="contactHead">AO 400</p><ContactInfo>etunimi.sukunimi@carea.fi</ContactInfo><p> Nimi</p><p>Nimi</p></li>
                    <li><p className="contactHead">AO 401</p><ContactInfo>etunimi.sukunimi@carea.fi</ContactInfo><p>Nimi</p><p>Nimi</p><p>Nimi</p></li>
                    <li><p className="contactHead">AO 404</p><ContactInfo>etunimi.sukunimi@carea.fi</ContactInfo><p>Nimi</p><p>Nimi</p></li>
                    <li><p className="contactHead">AO 406</p><ContactInfo>etunimi.sukunimi@kotka.fi</ContactInfo><p>Nimi</p><p>Nimi</p></li>
                    <li><p className="contactHead">AO 408</p><ContactInfo> etunimi.sukunimi@hamina.fi</ContactInfo><p>Nimi</p><p>Nimi</p></li>

            </ul>
        </div>
    </Contacts>
    <Rake>
        <h4>Rake-ryhmä?</h4>
        <p>Alueellinen rakennemuutos- eli RAKE-ryhmä, jonka keskeisenä tehtävänä on selvittää muutoksen vaikutukset tehyläisiin ja vastata niihin. Ryhmän tehtävänä on sopia ja valita edustajia työryhmiin, joissa henkilöstöä koskevia asioita käsitellään.</p>
        <Link to="/rake/"><Button>LUE LISÄÄ</Button></Link>
    </Rake>
</ContactContainer>
);

export default Contact;