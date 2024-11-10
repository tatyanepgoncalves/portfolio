import ThemeToggle from "../Theme/ThemeToggle";
import MenuMobile from "../MenuMobile/MenuMobile";
import "../../styles/_header.scss";

export default function Header() {
  return (
    <header className="header" id="header">
      <a href="#header" className="logo">
        <h3>Tatyane Gonçalves</h3>
      </a>

      <nav className="header-nav">
        <a href="#home">Home</a>
        <a href="#about">Sobre</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
      </nav>

      <div className="header-btns">
        <ThemeToggle />

        <div className="header_menu-mobile">
          <MenuMobile />
        </div>
      </div>

    </header>
  );
}
