import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Publier from "./components/publier";
import Login from "./components/Login";
import Header from "./components/header";
import Acceuil from "./components/pages/Acceuil";
import Footer from "./footer";

import { StartupProvider } from "./components/contexts/StartupContext"; // ✅ import your provider

function App() {
  return (
    <>
      {/* Wrap everything inside the context provider */}
      <StartupProvider>
        <Header />
        <Acceuil />
        {/* <Publier /> 
        <Login /> */}
        <Footer />
      </StartupProvider>
    </>
  );
}

export default App;
