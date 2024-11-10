import SocialMedia from "../SocialMedia/SocialMedia";
import { MdEmail } from "react-icons/md";
import "../../styles/_contact.scss";

export default function Contact() {
  return (
    <section id='contact'>
      <h2>Contato</h2>
      <p>Estou disponível para serviços e novas conexões. Contate-me via e-mail e conecte-se comigo através das minhas redes sociais.</p>
      <SocialMedia />

      <div className="box-email">
        <MdEmail />
        <a href="mailto:tatypg023@gmail.com" target="_blank" className="email">tatypg023@gmail.com</a>
      </div>

    </section>
  )
}
