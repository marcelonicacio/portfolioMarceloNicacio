import {ContactContainer} from './style'
import { FaLinkedin } from 'react-icons/fa'

export const Contact = () => {
  return (

    <ContactContainer id='Contact'>
      <h2>@ <span>CONTACT</span></h2>
      <div className='ContactBox'>
        <div className='linkedin'><p>Pode entrar em contato comigo através do meu Linkedin ou se quiser, me mandar uma mensagem.</p>
  
        <div className='contacts'>
            <button>LinkedIn <FaLinkedin/></button>
            
          </div>
        </div>
         
        
        <button>Message</button>
      </div>
      
    </ContactContainer>
  )
}
