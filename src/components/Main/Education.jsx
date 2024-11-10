import Curses from "./Curses";
import { University, GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <article className="education">
      <div className="education-left">
        <h2>Formação</h2>
        <div className="education-box">
          <h3>Bacharel em Sistemas de Informação</h3>
          <span>Abr/2023 - Mar/2027</span>

          <div className="instituicao">
            <University />
            <p>Descomplica Faculdade</p>
          </div>

          <div className="title">
            <GraduationCap />
            <p>Graduação</p>
          </div>
        </div>
      </div>

      <Curses />
    </article>
  )
}
