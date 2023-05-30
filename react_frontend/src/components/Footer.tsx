import { Git, Email, Mastodon } from "./Logos";

export default function Footer() {
  return (
    <>
      <div className="text-bg-dark p-4">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Geral</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-body-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/sobre" className="nav-link p-0 text-body-secondary">
                  Sobre
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/contato" className="nav-link p-0 text-body-secondary">
                  Contato
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://www.gnu.org/licenses/agpl-3.0.html"
                  className="nav-link p-0 text-body-secondary"
                >
                  Licença
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Produtos</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Carrinho
                </a>
              </li>
              {/*<li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  About
                </a>
              </li>*/}
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Feito com:</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="https://elixir-lang.org/install.html"
                  className="nav-link p-0 text-body-secondary"
                >
                  Elixir
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://github.com/ninenines/cowboy"
                  className="nav-link p-0 text-body-secondary"
                >
                  Cowboy
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://react.dev/"
                  className="nav-link p-0 text-body-secondary"
                >
                  React
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://vitejs.dev/"
                  className="nav-link p-0 text-body-secondary"
                >
                  Vite
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Pesquise Agora!</h5>
              <p>O melhor pneu pra Você</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Insira o Nome do Pneu
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Insira o termo de busca desejada"
                />
                <button className="btn btn-primary" type="button">
                  Pesquisar
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>
            Copyright © 2023 Mateus Felipe da Silveira Vieria, Site em licença{" "}
            <a href="/COPYING.txt">AGPL v3</a> ou posterior.
          </p>

          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <Git />
            </li>
            <li className="ms-3">
              <Email />
            </li>
            <li className="ms-3">
              <Mastodon />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
