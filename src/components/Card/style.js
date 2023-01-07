import styled from 'styled-components';

export const CardBody = styled.div` 
width: 80%;
margin: 0 auto
`
export const CardContainer = styled.div` 

border: 1px solid #fff;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
transition: .8s;
opacity: .9;

&:hover {
    transform: scale(1.1);
    opacity: 1;
}

`
export const CardTop = styled.div` 
background-color: grey;



& > img{
    object-fit: cover;
    width: 250px;
}
`

export const CardBottom = styled.div` 
background-color: beige;

h1 {
    font-size:2rem;
    color: red;
}
`