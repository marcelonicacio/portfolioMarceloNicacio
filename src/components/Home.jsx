import '../layout/Home.css'


export const Home = () => {
  return (
    <div id="Home" className='homeContainer'>
        <div className="intro">
            <div className="yellowBox">
                <h1>HEY, THERE!</h1>
            </div>
            <h2>I'M MARCELO NICACIO,</h2>
            <h2>FRONT-END DEVELOPER</h2>
        </div>
        <div className="ballBox">
            <div className="ball"></div>
            <div className="shadow"></div>
        </div>
    </div>
  )
}
