import { useContext } from "react";
import "./App.css";
import Header from "./COMPONENTS/HEADER/Header";
import { PassData } from "./countryContext";
import Banner from "./PAGES/BANNER/Banner";
import Home from "./PAGES/HOME/Home";

function App() {


  return (
    <>
        <Header />
        <Banner />
        <Home />
    </>
  );
}

export default App;
