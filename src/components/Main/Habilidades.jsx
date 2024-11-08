import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoSass,
} from "react-icons/io5";

export default function Habilidades() {
  return (
    <section id="skills">
      <h2>Conhecimento nas principais tecnologias do mercado</h2>

      <article>
        <div className="skills-items">
          <IoLogoHtml5 size={24} />
        </div>
        <div className="skills-items">
          <IoLogoCss3 size={24} />
        </div>
        <div className="skills-items">
          <IoLogoSass size={24} />
        </div>
        <div className="skills-items">
          <IoLogoJavascript size={24} />
        </div>
        <div className="skills-items">
          <IoLogoReact size={24} />
        </div>
      </article>
    </section>
  );
}
