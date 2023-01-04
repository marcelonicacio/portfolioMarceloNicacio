import styled from 'styled-components';

export const FooterBar = styled.div`
height: 5vh;
display: flex;
justify-content: center;
align-items: center;
gap: 50px;
border-top: 2px solid #fff;
padding: 20px;

ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
   
}

li {
    font-size: 1.5rem;
    cursor: pointer;
}
`