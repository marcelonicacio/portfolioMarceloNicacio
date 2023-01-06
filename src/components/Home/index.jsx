
import { HomeContainer , YellowBox, Intro } from './style'
import hand from "../../img/hand.svg"


export const Home = () => {
  
  return (
  
    <HomeContainer id='Home'> 
      <Intro>
          <YellowBox>
            <h1>HEY, THERE!</h1>
          </YellowBox>
          <h2>I'M MARCELO NICACIO,</h2>
          <h2>FRONT-END DEVELOPER</h2>
      </Intro>
    <img src={hand} alt="" />
    </HomeContainer>

  )
}
