
import {BallBox, Ball, Shadow, Eyes} from './style'

export const JellyBall = () => {


 
  return (
    
    <BallBox>
      <Ball id="ballScreen">
      <div className='face'>
        <div  className="eye">
          <Eyes />
          <Eyes />
        </div>
        <div className='ballContact'>hey!</div>
      </div>
     
      </Ball>
    
      <Shadow/>
    </BallBox>

    
  )

}