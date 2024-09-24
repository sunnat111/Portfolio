import { useEffect, useState } from "react";
import Aboutme from "./pages/Aboutme/Aboutme";
import Skills from "./pages/Skills/Skills";
import Works from "./pages/Works/Works";
import All from "./pages/All/All";
import Contacts from "./pages/Contacts/Contacts";
import "./scss/main.scss";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
       <Routes>
        <Route path="/portfolio/" element={<All/>} />
        <Route path="/portfolio/about" element={<Aboutme/>} />
        <Route path="/portfolio/skills" element={<Skills/>} />
      </Routes>
    </>
  );
}

export default App;
