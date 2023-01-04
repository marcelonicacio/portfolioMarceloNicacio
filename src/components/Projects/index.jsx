import {ProjectsContainer} from './style.js'
import { FaGithub } from "react-icons/fa";
import simon from '../../img/simon.png'
import card from '../../img/card.png'
import movies from '../../img/movies.png'


export const Projects = () => {
  return (

    <ProjectsContainer id='Projects'>
        
            <h2>my <span className="nameProj">PROJECTS</span></h2>  
            <div className="boxProj">
        
            <div className="proj project1" id='Project 1'>
                <div className="navProj">/simon</div>
                <div className='cardText' >
                    <p>O projeto do jogo Simon envolveu lógica para conseguir fazer as regras do jogo em Javascript, além do layout com cores nostalgicas em CSS.</p>
                    <hr />
                    <div className='card'><img src={simon} alt="simon logo" /></div>
                </div>
            </div>
            <div className="proj project2"><div className="navProj">/rocketpay</div>
                <div className='cardText'>
                    <p>Simula uma api de cartão de crédito onde descobre a bandeira do cartão e aceitar dados válidos. Exercicio para treiamento de Expressões Regulares.</p>
                    <hr />
                    <div className='card'><img src={card} alt="card logo" /></div>
                </div>
            </div>
            <div className="proj project3">
                <div className="navProj">/movies</div>
                <div className='cardText'>
                <a href="https://movies-lib-blue.vercel.app/">
                    <p> Page with Imdb api search, the movie's list includes poster, rate, budget, revenue and description, the project had some hooks in React. </p></a>
                    <hr />
                    <div className='card'><img src={movies} alt="movies logo" /></div>
                </div>
            </div>
            <div className="proj project4">
                <div><h3>+</h3></div>
            </div>
        </div>
        <div className="repositories">
                <h2>Repositórios dos projetos</h2>
                <button><a href="https://github.com/marcelonicacio?tab=repositories">GitHub <FaGithub/> </a></button>
            </div>
    </ProjectsContainer>
    
  )
}

