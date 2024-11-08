import { Instagram, Github, Linkedin } from "lucide-react";


export default function SocialMedia() {
  return (
    <div className="social-media"> 
      <a href=""><Github  size={24}/></a>
      <a href=""><Linkedin size={24} /></a>
      <a href=""><Instagram  size={24}/></a>
    </div>
  )
}
