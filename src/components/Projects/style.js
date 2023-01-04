import styled from 'styled-components';

export const ProjectsContainer = styled.div`

    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 40px;
    justify-content: space-around;
    scroll-snap-align: start;
    

h2 {
    
    text-align: left;
    font-size: 2.5rem;
    text-shadow: 2px 2px 5px #000;
}

h3 {
    font-size: 15rem;
    font-weight: 100;
}

img {
    height: 35%;  
}

hr {
    margin: 20px 0;
}

button {
    height: 2.5rem;
    width: 8rem;
    background-color: #d9f24f;
    color: #000;
    border: none;
    font-size: 1.1rem;
    cursor: pointer;
    box-shadow: 2px 2px 5px gray;
}

a {
    text-decoration: none;
}

.nameProj {
    background-color: #d9f24f;
    color: #000;
    box-shadow: 2px 2px 5px gray;
    text-shadow: 0px 0px 0px;
    padding: 10px;
}
.boxProj {
    display: flex;
    align-items: center;
    gap: 2rem;
}
.navProj {
    position: relative;
    padding: 10px 0 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 0.8rem;
    text-align: start;
}

.proj {
    display: flex;
    flex-direction: column;
    height: 45vh;
    width: 18vw;
    border: 2px solid #fff;
    bottom: 20px;
    cursor: pointer;
    position: relative;
    transition: z-index .5s; 
    box-shadow: 5px 5px 1px #fff;
}

.project4 {
    display: flex;
    align-items: center;
}

.cardText {
    margin: 20px;
    
}

.carText p {
    padding-bottom: 20px;
}

.card {
    display: flex;
    height: 300px;
    flex-direction: column;
    align-items: center;
}



.repositories {
   display: flex;
   justify-content: flex-end;
   align-items: center;
   margin-right: 15rem;
   gap: 1.5rem;
   text-shadow: 2px 2px 5px #000;

   
}

.repositories a {
    color: #000;
}

`
