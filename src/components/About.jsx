import '../layout/About.css'
import { FaReact,FaCss3, FaHtml5, FaGithub } from "react-icons/fa";

export const About = () => {
  return (
    <div id='About'>
        <div className="aboutMe">
            <h1>My Name is <span className='name'>Marcelo Nicacio</span></h1>
            <h2>Front-end Developer</h2>
            <p>Brasileiro, vivo em Portugal, na cidade do Porto a 3 anos, trabalho no museu de Serralves, que é onde tenho contato mais de perto com arte conteporanea e design.</p> <p>No meu tempo livre gosto de estudar e jogar muito videogame, sou viciado em xbox e nintendo switch, além de gostar muito de jogos de tabuleiro modernos onde exercito meu raciocinio e minha lógica. </p>
            <p> Tenho conhecimento em front-end e estou estudando back-end para me tornar full-stack.</p>
        </div>
        <ul id='skills'> <p>skills</p>
            <li><FaHtml5/></li>
            <li><FaCss3/></li>
            <li></li>
            <li><FaReact/></li>
            <li></li>
            <li><FaGithub /></li>
        </ul>

    </div>
  )
}

