import styled from 'styled-components';

export const HomeContainer = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    height: 85vh;
    width: 90vw;
    margin-left: 5vw;
    border: 3px solid #fff;
    background-image:
    linear-gradient(#ffffff39 2px, transparent 2px),
    linear-gradient(90deg, #ffffff3f 2px, transparent 2px),
    linear-gradient(#ffffff1e 1px, transparent 1px),
    linear-gradient(90deg, #ffffff47 1px, transparent 1px);
  background-size: 200px 200px, 200px 200px, 40px 40px, 40px 40px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
 
`;

export const Intro = styled.div`
   
    

h2 {
    font-size: 4rem;
  text-shadow: 2px 2px 5px #000;
    
}

`;

export const YellowBox = styled.div`
   display: flex;
   align-items: flex-start;
   justify-content: start;

h1 {
    background-color: #d9f24f;
    color: #000;
    transform: rotate(-3deg);
    padding: 10px;
    font-size: 3.5rem;
    box-shadow: 2px 2px 5px gray;
  
    
}

`;



