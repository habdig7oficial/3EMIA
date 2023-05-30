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
    cards.push(<Card key={i} title={api[i].Foo} subtitle="World" img="" />);
  }

  return (
    <>
      <Navbar />
      <Slide
        title={[`Os Melhores Pneus`, `Para Todos os veículos`]}
        subtitle={[
          `Pneus Especialmente Selecionados pra Você`,
          `De Carros até Tratores`,
        ]}
        alts={[`Rodas`]}
        images={[
          `https://images.pexels.com/photos/244553/pexels-photo-244553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
          `https://images.pexels.com/photos/2254093/pexels-photo-2254093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
        ]}
      />

      <div className="d-flex flex-row align-items-center justify-content-center">
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
