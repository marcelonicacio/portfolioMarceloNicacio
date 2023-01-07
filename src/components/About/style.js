import styled from 'styled-components';

export const AboutContainer = styled.div`
  
  display: flex;
   justify-content: space-around;
   height: 100vh;
   padding: 30px;
   

p {
    margin: 0 30px ;
    font-size: 1.3rem;
    text-shadow: 1px 1px 2px #000;
}


h2 {
    font-size: 2.6rem;
    
}


h3 {
    font-size: 2rem;
    text-shadow: 2px 2px 5px #000;
    
}

h4 {
    font-size: 1.5rem;
    margin: .5rem;
    text-shadow: 1px 1px 3px #000;
}

h5 {
    font-size: 6rem;
    top:180vh;
    left: 60vw;
    cursor: pointer;
    text-align: center;
    margin-top: 30px;
    text-shadow: 2px 2px 5px #000;
}

img {
    width: 50%;
   
}

.chip {
    width: 70%;
}


.skills {
    margin-top: 5vh;
    
    height: 65vh;
    border: 3px solid #fff;
    box-shadow: -15px 15px 1px #676668;
    background-image:
    linear-gradient(#ffffff39 2px, transparent 2px),
    linear-gradient(90deg, #ffffff3f 2px, transparent 2px),
    linear-gradient(#ffffff1e 1px, transparent 1px),
    linear-gradient(90deg, #ffffff47 1px, transparent 1px);
  background-size: 200px 200px, 200px 200px, 40px 40px, 40px 40px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
 
}

.skillsName {
    background-color: #d9f24f;
    color: #000;
   
}

.skillsChip {
    display: flex;
    width: 40vw;
  
}
.skillsList {
    list-style: georgian;
   
}

ul {
    cursor: pointer;
}

.btn {
    display: flex;
    width: 80%;
    justify-content: end;
}

.aboutBtn {
    border: 1px solid #fff;
    text-shadow: 1px 1px 2px #000;
    padding: 5px;
    border-radius: 3px;
    background-color: #fff7;
    cursor: pointer;
}


.aboutMe {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 5vh;
    height: 90vh;
    width: 40vw;
   
  
}
.robo {
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

.robo img {
    transform: scaleX(-1);
    

}

.title {
    padding: 30px;
    font-size: 2rem;
    text-shadow: 1px 1px 3px #000;
    text-align: center;
    
}
.name {
   
   background-color: #d9f24f;
   color: #000;
    margin: 0 5px;
    padding: 10px;
    text-shadow: 0px 0px 1px gray;
}


`


