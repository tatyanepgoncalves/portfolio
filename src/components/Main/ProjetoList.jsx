import { ArrowUpRight } from "lucide-react";

const projectData = [
  {
    id: 1,
    image: "Projeto 1",
    title: "Nome do Projeto",
    description: "Breve descrição sobre o projeto",
    techs: ["Tech 1", "Tech 2", "Tech 3"],
    code: "https://github.com/tatyanepgoncalves/Jogo-Detona-Ralph/tree/main",
    deploy: "https://tatyanepgoncalves.github.io/Jogo-Detona-Ralph/",
  },
  {
    id: 2,
    image: "Projeto 2",
    title: "Nome do Projeto",
    description: "Breve descrição sobre o projeto",
    techs: ["Tech 1", "Tech 2", "Tech 3"],
    code: "https://github.com/tatyanepgoncalves/Website-stranger-things",
    deploy: "https://website-stranger-things.vercel.app/",
  },
  {
    id: 3,
    image: "Projeto 3",
    title: "Nome do Projeto",
    description: "Breve descrição sobre o projeto",
    techs: ["Tech 1", "Tech 2", "Tech 3", "Tech 4"],
    code: "https://github.com/tatyanepgoncalves/Bookmark-website",
    deploy: "https://tatyanepgoncalves.github.io/Bookmark-website/",
  },
];

export default function ProjetoList() {
  return (
    <article className="project-list">
      {projectData.map((projeto) => (
        <div key={projeto.id} className="project-item">
          <div className="image-box">
            <p>{projeto.image}</p>
          </div>
          <div className="text-project">
            <h3>{projeto.title}</h3>
            <p>{projeto.description}</p>
            <ul className="techs-used">
              {projeto.techs.map((tech, index) => (
                <li key={index}><p>{tech}</p></li>
              ))}
            </ul>
            
            <div className="links-project">
              <div className="box-link">
                <a href={projeto.deploy} target="_blank">
                  Prévia do projeto
                </a>
                <ArrowUpRight size={24} />
              </div>
              <div className="box-link">
                <a href={projeto.code} target="_blank">
                  
                  Repositório
                </a>
              </div>
            </div>

          </div>

        </div>
      ))}
    </article>
  );
}
