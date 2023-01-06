import styled from 'styled-components';

export const ProjectsContainer = styled.div`

    display: flex;
    height: 100vh;
    padding: 30px;
    justify-content: space-around;

    .projects {
    
        display: flex;
        align-items: center;
        justify-content: center;
        width: 65vw;
        height: 80vh;
        border: 3px solid #fff;
        background-image:
    linear-gradient(#ffffff39 2px, transparent 2px),
    linear-gradient(90deg, #ffffff3f 2px, transparent 2px),
    linear-gradient(#ffffff1e 1px, transparent 1px),
    linear-gradient(90deg, #ffffff47 1px, transparent 1px);
  background-size: 200px 200px, 200px 200px, 40px 40px, 40px 40px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
    }

    img {
        width: 20%
    } 
    .projBox {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        width: 97%;
        height: 95%;
        border: 5px solid #fff8;
    }

    .projName {
        
        background-color: #d9f24f;
        color: #000;
    margin: 0 5px;
    padding: 10px;
    text-shadow: 0px 0px 1px gray;
    }

    h1 {
    font-size: 2.6rem;
    padding: 30px;
    font-size: 2rem;
    text-shadow: 1px 1px 3px #000;
    text-align: center; 
    }
`
