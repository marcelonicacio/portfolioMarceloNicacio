import { FooterBar } from './style'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { BsQuestionDiamond } from "react-icons/bs";

export const Footer = () => {
  return (

    <FooterBar>
        <p>Marcelo Nicacio - 2022</p> 
        <ul>
          <li><FaLinkedin/></li>
          <li><FaGithubSquare /></li>
         <li> <BsQuestionDiamond/></li></ul>
    </FooterBar>

  )
}
