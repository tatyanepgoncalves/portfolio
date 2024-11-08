import { ArrowUpRight } from "lucide-react";


const projectData = [
  {
    id: 1,
    image: "../../images/projeto-detona-ralph.png",
    title:  "Jogo do Detona Ralph",
    description: "Jogo baseado no filme Detona Ralph, aonde o objetivo é acertar o Ralph na janela que ele aparecer. Projeto do bootcamp da DIO em parceria com a Ri Happy.",
    techs: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/tatyanepgoncalves/Jogo-Detona-Ralph/tree/main",
    deploy: "https://tatyanepgoncalves.github.io/Jogo-Detona-Ralph/"
  },
  {
    id: 2,
    image: "../../images/Projeto-Mundo-Normal.png",
    title: "Landing Page Stranger Things",
    description: "Landing Page desenvolvida baseado na série Stranger Things usando HTML, SCSS e JavaScript no bootcamp da DIO.",
    techs: ["HTML", "SCSS", "JavaScript"],
    code: "https://github.com/tatyanepgoncalves/Website-stranger-things",
    deploy: "https://website-stranger-things.vercel.app/"
  },
  {
    id: 3,
    image: "../../images/projeto-bookmark.png",
    title: "Bookmark landing page",
    description: "Landind Page de página de destino aos favoritos",
    techs: ["HTML", "SCSS", "React", "Vite"],
    code: "https://github.com/tatyanepgoncalves/Bookmark-website",
    deploy: "https://tatyanepgoncalves.github.io/Bookmark-website/"
  }
];

export default function ProjetoList() {

  return (
    <article className="project-list">
      {projectData.map((projeto) => (
        <div key={projeto.id}>
          <img src={projeto.image} alt={projeto.title} />
          <h3>{projeto.title}</h3>
          <p>{projeto.description}</p>
          <ul className="techs-used">
            {projeto.techs.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>

         <a href={projeto.code} target="_blank" > Ver repositório</a>
         <a href={projeto.deploy} target="_blank">Ver projeto <ArrowUpRight size={24} /></a>
        </div>
      ))}
    </article>
  );
}
