import { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Sobre() {
  return (
    <>
      <Navbar />

      <h1 className="text-center my-2">Sobre Nós</h1>


      <p className="text-justify my-4 mx-5">Somos uma nova marca de peneus que sugiu quando nosso professor de INW (Internet e Web) pediu para fazermos uma projeto desenvolvendo uma loja de pneus, então devido a tal aconcimento esta marca existe foi criada. Quaisquer dúvida entre em <a href="/contato">contato</a>.</p>

      <Footer />
    </>
  );
}
