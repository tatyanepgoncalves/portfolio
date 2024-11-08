import Curses from "./Curses"

export default function Education() {
  return (
    <article className="education">
      <div className="education-left">
        <h2>Formação</h2>
        <div className="education-box">
          <h3>Bacharel em Sistemas de Informação</h3>
          <span>Abr / 2023 - Mar / 2027</span>
          <p>Descomplica Faculdade</p>
        </div>
      </div>

      <Curses />
    </article>
  )
}
