import '../layout/Projects.css'
import simon from '../img/simon.png'
import card1 from '../img/card1.png'

export const Projects = () => {
  return (
    <div id='Projects'>
<h2>my <span className="nameProj">PROJECTS</span></h2>
<div className="boxProj">
    <div className="proj project1">
        <div className="navProj">/simon</div>
        <div className='cardText'><p>O projeto do jogo Simon envolveu lógica para conseguir fazer as regras do jogo em Javascript, além do layout com cores nostalgicas em CSS.</p>
        <hr />
        <div className='card'><img src={simon} alt="" /></div></div>
    </div>
    <div className="proj project2"><div className="navProj">/rocketpay</div>
    <div className='cardText'><p>O projeto simulou uma api de cartão de crédito onde descobre a bandeira do cartão sendo aceito dados válidos. Exercicio para treiamento de Expressões Regulares. </p>
        <hr />
        <div className='card'><img src={card1} alt="" /></div></div>
    </div>
    <div className="proj project3">
        <div className="navProj">/someproj</div>
        <div className='cardText'><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus saepe nostrum dolor. Eaque quis error corporis illo nostrum laboriosam corrupti optio reprehenderit.</p>
        <hr />
        <div className='card'></div></div>
    </div>
    <div className="proj project4">
        <div className='plus'><h3>+</h3></div>
    </div>
</div>
    </div>
  )
}

