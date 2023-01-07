import { CardBody, CardContainer, CardTop, CardBottom } from './style'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { DataCard } from './data'

export const Card = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      
  return (
   <CardBody>
    <Slider {...settings}>
    {DataCard.map((item) => (
        <CardContainer>
            <CardTop>
            <img src={item.img} alt={item.title} />
           
            </CardTop>
            <CardBottom>
            <h1>{item.title}</h1>
                <h3>{item.description}</h3>
            </CardBottom>
            </CardContainer>
    ))}
    </Slider>
  
  </CardBody>
    
  )
}


