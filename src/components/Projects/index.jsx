import {ProjectsContainer} from './style.js'
import { FaGithub } from "react-icons/fa";
import floppy from "../../img/floppyproj.svg"


export const Projects = () => {
  return (

    <ProjectsContainer id='Projects'>
    
       <img src={floppy} alt="" />
       <div className='projects'>
        <div className="projBox">
            <div >
               <h1>my <span className='projName'>Projects</span></h1>
            </div>
        </div>
       </div>
    </ProjectsContainer>
    
  )
}

