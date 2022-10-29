import '../layout/About.css'
import { FaReact,FaCss3Alt, FaHtml5,FaNodeJs, FaGithub,FaSlackHash } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { GrMysql } from "react-icons/gr";

export const About = () => {
  return (
    <div id='About'>
        <div className="aboutMe">
          <div className="navAbout">/about me</div>
              <h2 className='title'>my name is <span className='name'>MARCELO NICACIO</span></h2>
              <hr />
              <h3>Front-end Developer</h3>
              
              <div className='text'>
            
              <p>Brasileiro, vivo em Portugal, na cidade do Porto a 3 anos, trabalho no museu de Serralves, que é onde tenho contato mais de perto com arte conteporanea e design.</p> <p>No meu tempo livre gosto de estudar e jogar muito videogame, sou viciado em videogames, além de gostar muito de jogos de tabuleiro modernos onde exercito meu raciocinio e minha lógica. </p>
              <p> Tenho conhecimento em front-end e estou estudando back-end para me tornar full-stack.</p>
            </div>
           
        </div>
        
        <div className="aboutSkills">
       
          <div className='navSkills'>/my stacks</div>
          
            <div className='skills'><h2>STACKS</h2>
           
            </div>
           
              <div className='ski'>
             
                <span className="chave">&#123;
                </span>
                <ul>
                <li><FaHtml5/><h4 className='item'>html</h4></li>
                <li><FaCss3Alt/><h4>CSS</h4></li>
                <li><DiJavascript1 /><h4>JavaScript</h4></li>
                <li><FaReact/><h4>React</h4></li>
                <li><FaNodeJs/><h4>NodeJS</h4></li>
                <li><GrMysql/><h4>MySQL</h4></li>
                <li><FaGithub /><h4>GitHub</h4></li>
                </ul>
                        <span className="chave">&#125;</span>
                        <span id="me"><h4><FaSlackHash/>me</h4></span>   
              </div>
              
            </div>
            
        
    </div>
    
  )
}

