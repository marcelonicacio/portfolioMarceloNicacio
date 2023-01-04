import styled from 'styled-components';
export const ContactContainer = styled.div`

display: flex;
flex-direction: column;
height: 95vh;
padding-top: 40px;
scroll-snap-align: start;
color: #fff;

    

h2 {
    text-align: left;
    font-size: 2.5rem;
    margin: 40px;
    text-shadow: 2px 2px 5px #000;
    
}

span {
    background-color: #d9f24f;
    color: #000;
    box-shadow: 2px 2px 5px gray;
    padding: 10px;
    text-shadow: 0 0 0;
}

p {
    font-size: 1.5rem;
    text-shadow: 1px 1px 3px #000;
}

button {
    height: 2.5rem;
    width: 8rem;
    background-color: #d9f24f;
    color: #000;
    border: none;
    font-size: 1.1rem;
    cursor: pointer;
    margin: 0 60px;
    box-shadow: 2px 2px 5px gray;
}

.ContactBox {
    display: flex;
   align-items: center;
   justify-content: space-around;
  
   
}

.linkedin {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 400px;
    width: 600px;
    border: 2px solid #fff;
    padding: 20px;
    box-shadow: 10px 10px 1px #fff;
}

svg {
    background-color: #A570FB;
}

.bonus {
    height: 100px;
    width: 100px; 
    border: 2px solid #fff;
    font-size: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 2px 2px 5px gray;
    text-shadow: 1px 1px 1px #000;
    border-radius: 5px;
}

`

