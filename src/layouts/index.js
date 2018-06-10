import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import '../layouts/index.css';


export default ({ children }) => (
    <div>
        <Header />
        {children()}
       <Footer/>
    </div>
);