import SocialMedia from "../SocialMedia/SocialMedia";
import BtnCallToAction from "../Buttons/BtnCallToAction";
import "../../styles/home.scss";

export default function Home() {
  return (
    <section id="home">
      <div className="title">
        <h1>Frase que promova</h1>
        <span>entrega de valor</span>
      </div>
      
      <p>Seu nome e uma breve descrição profissional sobre você, habilidades e o que faz.</p>
      <SocialMedia />
      <BtnCallToAction />
    </section>
  )
}
