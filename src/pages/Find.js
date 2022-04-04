import React from "react";
import Hero from "../components/Hero";
//import Banner from "../components/Banner";
//import { Link } from "react-router-dom";
import UserDetails from "../components/UserDetails";
import Services from "../components/Services";
//import Form1 from "../components/Form1";
//import Form3 from "../components/Form3";
//import RightSide from "../components/RightSide";
import DistDropdown from "../components/DistDropdown";
//import Searchform from "../components/Searchform";
import Options from "../components/dyanamic";
import DistDropdown1 from "../components/hotelfind";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Find = () => {
    return (
        <>
        <Hero>
      <p>
        <h1 align="center">Find Hotel</h1>
      <UserDetails/>
      </p>
               </Hero>
               
       <Services/>
       
        </>
    );
};

export default Find;
