
import styled from 'styled-components';

export const BallBox = styled.div`


    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 30px;
    right: 30px;

    .eye {
        display: flex;
        justify-content: center;
        gap: 3px;
        margin-bottom: 10px;
    flex-direction: row;

    }

    .face {
    
    opacity: 0;

    }


    .face:hover {
        opacity: 1;
    }

    .ballContact {
      text-align: center;
        text-shadow: 1px 1px 1px #000;
        font-size: 1rem;
    }



`

export const Ball = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
    width: 120px;
    position: relative;
    cursor: pointer;
    bottom: 20px;
    border-radius: 50%;
    box-shadow: inset 0 0 20px #fff,
                inset 10px 0 46px #eaf5fc,
                inset -20px -60px 100px #fde9ea,
                inset 0 50px 100px #fde9ea,
                0 0 90px #fff;
    animation: float 3.5s ease-in-out infinite;

@keyframes float{
    0%, 100% {
        transform: translateY(0px)
    }
    50% {
        transform: translateY(-80px);
    }

}

p {
    font-size: 1.6rem;
}
`
export const Shadow = styled.div`
  width: 110px;
    height: 20px;
    background: #b490b2;
    animation: expand 3.5s infinite;
    border-radius: 50%;

@keyframes expand {
    0%, 100% {
        transform: scale(0.5);
    }
    50% {
        transform: scale(1);
    }

}



`
export const Eyes = styled.div`


width: 30px;
    height: 40px;
    border-radius: 35%;
    background-color: #fff;
    border: 2px solid #0001;
    animation: blink 2s infinite;
   

   

   


    @keyframes blink {
        0%, 100% {
        transform: scaleY(1)
    }
    42% {
        transform: scaleY(1);
    }
    49% {
        transform: scaleY(.1);
    }
    50% {
        transform: scaleY(1);
    }

    }

   
`




