import React from "react";
import CountryCard from "./CountryCard";
import NavBar from "./NavBar";
import { Provider } from "react-redux";
import store from "../redux/store";
import Footer from "./Footer";
function Home() {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <CountryCard />
        <Footer/>
      </Provider>
    </>
  );
}

export default Home;
