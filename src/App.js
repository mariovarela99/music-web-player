import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import "./styles/reset.scss";
import Player from "./views/player";

function App() {
  return (
    <>
      <Header />
      <Player />
      <Footer />
    </>
  );
}

export default App;
