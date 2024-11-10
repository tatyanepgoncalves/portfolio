import { Instagram, Github, Linkedin } from "lucide-react";


export default function SocialMedia() {
  return (
    <div className="social-media"> 
      <a href="https://github.com/tatyanepgoncalves" target="_blank"><Github  size={24}/></a>
      <a href="https://www.linkedin.com/in/tatyanegoncalves/" target="_blank"><Linkedin size={24} /></a>
      <a href="https://www.instagram.com/devtatyane/" target="_blank"><Instagram  size={24}/></a>
    </div>
  )
}
