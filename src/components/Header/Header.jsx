import ThemeToggle from "../Theme/ThemeToggle";
import MenuMobile from "../MenuMobile/MenuMobile";
import "../../styles/_header.scss";

export default function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <a href="#home">Home</a>
        <a href="#about">Sobre</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
      </nav>

      <ThemeToggle />

      <div className="logo">
        <h3>Tatyane Gonçalves</h3>
      </div>

      <div className="header_menu-mobile">
        <MenuMobile />
      </div>
    </header>
  );
}
