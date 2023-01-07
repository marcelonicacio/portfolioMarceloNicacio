import {ProjectsContainer} from './style.js'
import { FaGithub } from "react-icons/fa";
import { Card } from '../Card'
import floppy from "../../img/floppyproj.svg"


export const Projects = () => {
  return (

    <ProjectsContainer id='Projects'>
       
       <h1>my <span className='projName'>Projects</span></h1>
            
       <Card/>
    </ProjectsContainer>
    
  )
}

