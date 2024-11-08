import { useState } from "react";
import { Menu, X } from "lucide-react";
import "../../styles/light-theme.scss";
import "../../styles/dark-theme.scss";
import "../../styles/menu-mobile.scss";

export default function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mobile-menu">
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isOpen && (
        <nav className="menu-items">
          <a href="#home" onClick={toggleMenu}>
            Home
          </a>
          <a href="#about" onClick={toggleMenu}>
            Sobre
          </a>
          <a href="#projects" onClick={toggleMenu}>
            Projetos
          </a>
          <a href="#contact" onClick={toggleMenu}>
            Contato
          </a>
        </nav>
      )}
    </div>
  );
}
