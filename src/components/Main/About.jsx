import imageAvatar from "../../images/Tatyane.jpg";
import { Languages } from "lucide-react";
import Education from "./Education";
import "../../styles/_about.scss";

export default function About() {
  return (
    <section id="about">
      <article className="about-top">
        <div className="box-text">
          <h2>Sobre mim</h2>
          <p>Descrição sobre você e suas habilidades e experiências. Descrição sobre você e suas habilidades e experiências. Descrição sobre você e suas habilidades e experiências. Descrição sobre você e suas habilidades e experiências. Descrição sobre você e suas habilidades e experiências. Descrição sobre você e suas habilidades e experiências. Descrição sobre você e suas habilidades e experiências. Descrição sobre você e suas habilidades e experiências. </p>

          <div className="language-box">
            <Languages size={24} />
            <div className="language-item">
              <h3>Espanhol</h3>
              <p>Intermediário</p>
            </div>
            
            <div className="language-item">
              <h3>Inglês </h3>
              <p>Básico</p>
            </div>
          </div>
        </div>
        
        <div className="box-image">
          <img src={imageAvatar} alt="Tatyane Gonçalves" />
        </div>


      </article>

      <Education />

     
    </section>
  )
}
