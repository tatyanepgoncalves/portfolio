import SocialMedia from "../SocialMedia/SocialMedia";

export default function Contact() {
  return (
    <section id='contact'>
      <h2>Contato</h2>
      <p>Estou disponível para serviços e novas conexões. Contate-me via e-mail e conecte-se comigo através das minhas redes sociais.</p>
      <SocialMedia />

      <a href="mailto:tatypg023@gmail.com" target="_blank" className="email">tatypg023@gmail.com</a>
    </section>
  )
}
