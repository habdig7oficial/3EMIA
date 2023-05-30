import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { Email, Git, Mastodon } from "../components/Logos";

export default function Contato() {
  return (
    <>
      <Navbar />

      <h1 className="text-center"> Fale Conosco! </h1>

      <div className="m-5">
      <table className="table my-5 ">
        <thead>
          <tr>
            <th scope="col">Opções</th>
            <th scope="col">Logo da Rede</th>
            <th scope="col">Nome</th>
            <th scope="col">Contato</th>
          </tr>
        </thead>
        <tbody className="table-group-divider ">
          <tr className="px-5">
            <th scope="row">1</th>
            <td>
              <Git />
            </td>
            <td>Repositório Git</td>
            <td><a href="https://github.com/habdig7oficial/3EMIA"> https://github.com/habdig7oficial/3EMIA </a></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>
              <Email />
            </td>
            <td>E-mail</td>
            <td><a href="mailto:habdig7@gmail.com">habdig7@gmail.com</a></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td><Mastodon /></td>
            <td> Mastodon </td>
            <td> Em breve </td>
          </tr>
        </tbody>
      </table>
      </div>

      <Footer />
    </>
  );
}
