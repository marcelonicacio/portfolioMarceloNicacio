import { AboutContainer} from './style'
import { FaReact,FaCss3Alt, FaHtml5,FaNodeJs, FaGithub,FaPython } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import cpu from "../../img/robotface.svg";
import chip from "../../img/chip3.svg";

export const About = () => {
  return (
 
    <AboutContainer>
     <div id='About' className="aboutMe">
          <h2 className='title'>my name is <span className='name'>MARCELO NICACIO</span></h2>
   
         
          <h3>Front-end Developer</h3>
      <br />
        <p>Vivo na cidade do Porto em Portugal há 3 anos e trabalho com front-end, além disso, desenvolvo alguns projetos pessoais em pynthon. Sou apaixonado por tecnologia e internet das coisas. </p>
        <br />
        <p>Vivo na cidade do Porto em Portugal há 3 anos e trabalho com front-end. </p>
        <div className="btn"><button className='aboutBtn'>saiba mais</button></div>
        
       <div className='robo'><img src ={cpu}/></div>
     </div>

     <div className="skills">
     <h2 className='title'> <span className='name'>SKILLS</span></h2>
     <div className="skillsChip">
       <img className='chip' src={chip} alt="" />
                <ul className='skillsList'>
                  <li ><h4><FaHtml5 id='HTML'/> HTML</h4></li>
                  <li><h4><FaCss3Alt id='CSS'/> CSS</h4></li>
                  <li><h4><DiJavascript1  id='JavaScript'/> JavaScript</h4></li>
                  <li><h4><FaPython/> Python</h4></li>
                  <li><h4><FaReact id='React'/> React</h4></li>
                  <li><h4><FaNodeJs id='NodeJS'/> NodeJS</h4></li>
                  <li><h4><GrMysql id='MySQL'/> MySQL</h4></li>
                  <li><h4><FaGithub id='GitHub'/> GitHub</h4></li>
                </ul>
     </div>
      
     </div>

       
    </AboutContainer>
    
  )
}

