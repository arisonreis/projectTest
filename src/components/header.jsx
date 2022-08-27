import "../styles/header.scss";
import Logo from "../imgs/Logo.png";
import { toggleMenu } from "../events/toggleMenu";
import {List } from "phosphor-react";
const menuItem = [
  {
    src: "/home",
    name: "Home",
  },
  {
    src: "/services",
    name: "Services",
  },
  { src: "/download", name: "Download" },
  {
    src: "/sobre",
    name: "Sobre",
  },
  { src: "/contato", name: "Contato" },
  { src: "/construtoras", name: "CONSTRUTORAS" },
];
export function Header() {
  return (
    <>
      <header id="header">
        <div className="contentHeader">
          <div className="boxLogo">
            <a href="/">
              <img className="logo" src={Logo} alt="Logo" />
            </a>
          </div>
          <nav>
            <ul id="menu">
              {menuItem.map((item, index) => (
                <li className="menuItem" key={index}>
                  <a href={item.src}>{item.name}</a>
                </li>
              ))}
            </ul>
            <button id="btnMenu" onClick={() => toggleMenu()}>
              Menu
              <List className="icon"/>
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
