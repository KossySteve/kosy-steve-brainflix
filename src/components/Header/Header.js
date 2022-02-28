import React from "react";
import Hero from "../Hero/Hero";
import Nav from "../Nav/Nav";

function Header({mainVideo}) {
  return (
    <header>
      <Nav />
      <Hero mainVideo={mainVideo} />
    </header>
  );
}

export default Header;
