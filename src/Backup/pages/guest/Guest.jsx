import React from "react";
import Header from "../../components/Guest/Header";
import Hero from "../../components/Guest/Hero";
import About from "../../components/Guest/About";
import ProdukUnggulan from "../../components/Guest/ProdukUnggulan";
import Testimoni from "../../components/Guest/Testimoni";
import Footer from "../../components/Guest/Footer";

export default function Guest() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <ProdukUnggulan />
      <Testimoni />
      <Footer />
    </>
  );
}