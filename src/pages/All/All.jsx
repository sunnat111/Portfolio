import React from "react";
import PageMain from "../PageMain/PageMain";
import Aboutme from "../Aboutme/Aboutme";
import Skills from "../Skills/Skills";
import Works from "../Works/Works";
import Contacts from "../Contacts/Contacts";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const All = () => {
  return (
    <>
      <Header />
      <PageMain />
      <Aboutme />
      <Skills />
      <Works />
      <Contacts />
      <Footer />
    </>
  );
};

export default All;
