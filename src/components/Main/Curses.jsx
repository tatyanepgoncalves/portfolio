import { useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';

const cursosData = [
  {
    id: 1,
    title: "Formação Full Stack",
    institution: "Vai na Web",
    period: "Setembro/2024 - Março/2025",
    description: "Formação composta com base de conteúdos de Front-End, Back-End e Inteligência Artificial, aulas sobre as principais habilidades comportamentais exigidas pelo mercado de TI e aulas técnicas com profissionais da área para esclarecer sobre o mercado atual.",
    hability: ["Desenvolvimento de Sistemas Web", "Design responsivo e dinâmico", "Banco de Dados"]
  },
  {
    id: 2,
    title: "Bootcamp Frontend do Zero",
    institution: "Digital Innovation One (DIO)",
    period: "Setembro/2024 - Novembro/2024",
    description: "Bootcamp com aulas gravadas didatica e dinâmica sobre o universo frontend, desafios de códigos para colocar em prática o conhecimento adquirido, desafio de projeto com apoio das aulas e do protótipo no Figma.",
    hability: ["Dominio do HTML, CSS, JavaScript",  "Páginas web responsivas e dinâmicas", "Figma"]
  }
];


export default function Curses() {
  const [ openItems, setOpenItems ] = useState({});

  const toggleItemOpen = (id) => {
    setOpenItems(( prevState ) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div id="curses">

      <h2>Cursos</h2>

      {cursosData.map((curso) => (
        <div key={curso.id}>
          <div className="curses-item" onClick={() => toggleItemOpen(curso.id)}>
            <h3>{curso.title}</h3>
            <span>
              {openItems[curso.id] ? <ArrowUp size={24} /> : <ArrowDown size={24} />}
            </span>
          </div>
          {openItems[curso.id] && (
            <div className="curses-content">
              <span>{curso.institution} - {curso.period}</span>
              <p>{curso.description}</p>
              <ul>
                {curso.hability.map((hability, index) => (
                  <li key={index}>{hability}</li>
                ))}
              </ul>
            </div>
          )}

        </div>
      ))}
    </div>
  )
}
