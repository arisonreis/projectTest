import "../styles/start.scss";
import abrirChamado from "../imgs/abrir-chamado.png";
import appStore from "../imgs/appstore.png";
import googlePlay from "../imgs/googleplay.png";

export function Start() {
  return (
    <section className="start">
      <div className="boxTextStart">
        <h1>
          Chegou a <span>App Assist</span>
        </h1>
        <p>
          A solução completa em gestão de serviço, reparos e um sistema
          dashboard completo para que tudo seja acompanhado em tempo real.
        </p>
        <a href="">
          <img
            className="btnImage"
            src={abrirChamado}
            alt="Botão para abrir chamado"
          />
        </a>
        <a href="">
          <img
            className="btnImage"
            src={appStore}
            alt="Botão para ir para appsStore"
          />
        </a>
        <a href="">
          <img
            className="btnImage"
            src={googlePlay}
            alt="Botão para ir para appsStore"
          />
        </a>
      </div>
    </section>
  );
}
