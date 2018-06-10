import React from "react";
import styled from "styled-components";


const Head = styled.div`
    color: rgba(217,51,91, 1);
    background-color: #fff;
    margin: 0;
    padding: 1em 0 1em 3em;
    height: 100%;
    border-bottom: 2px solid #bab;
    
    @media (max-width: 420px) {
        height: 120px;
    }
    
`;

const Header = ({}) => (
    <Head>
        <div>Tehyn Kymenlaakson ammattiosastojen muutosinfo</div>
        
    </Head>
);
export default Header;