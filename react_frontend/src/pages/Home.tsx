import { useEffect, useState } from "react";
import Slide from "../components/Slides";
import Navbar from "../components/NavBar";
import Card from "../components/Card";
import Footer from "../components/Footer";

import type api from "../interfaces/api";
import search from "../components/Fetchapi";

export default function Home() {
  let [api, Setapi] = useState<Array<api>>([]);

  useEffect(function () {
    search(Setapi);
  });

  let cards: Array<JSX.Element> = [];
  for (let i = 0; i < api.length && i < 5; i++) {
    cards.push(<Card key={i} title={api[i].Nome} subtitle={api[i].Descricao} img={api[i].Imagem} preco={api[i].Preco} />);
  }

  return (
    <>
      <Navbar />
      <Slide
        title={[
          `Os Melhores Pneus`,
          `Para Todos os veículos`,
          `Com a confinça que você procura`,
        ]}
        subtitle={[
          `Pneus Especialmente Selecionados pra Você`,
          `De Carros até Tratores`,
          `Só Trabalhamos com as Melhores Marcas`
        ]}
        alts={[`Rodas`]}
        images={[
          `https://images.pexels.com/photos/244553/pexels-photo-244553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
          `https://images.pexels.com/photos/2254093/pexels-photo-2254093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
          `https://images.pexels.com/photos/3806252/pexels-photo-3806252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
        ]}
      />

      <div className="d-flex flex-row align-items-top justify-content-center my-5 flex-wrap">
        {api.length != 0 ? (
          cards
        ) : (
          <h4 className="text-center m-3">
            Desculpe Não Foi Encontrado nenhum produto
          </h4>
        )}
      </div>

      <Footer />
    </>
  );
}
