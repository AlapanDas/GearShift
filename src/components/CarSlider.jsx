import React from 'react'
import Slider from 'react-slick';
import carimg1 from "../assets/images/car_iamge.avif"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color:"black"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color:"black"}}
      onClick={onClick}
    />
  );
}

function CarSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };
  return (
    <div className='slider-container mx-5 sm:mx-10 mt-5'>
      <Slider {...settings}>
          <div>
            <img src={carimg1} alt="hellooo" className=' px-2'/>
          </div>
          <div>
          <img src={carimg1} alt="hellooo" className=' px-2' />
          </div>
          <div>
          <img src={carimg1} alt="hellooo" className=' px-2' />
          </div>
          <div>
            <img src={carimg1} alt="hellooo" className=' px-2'/>
          </div>
          <div>
          <img src={carimg1} alt="hellooo" className=' px-2' />
          </div>
          <div>
          <img src={carimg1} alt="hellooo" className=' px-2'/>
          </div>
    </Slider>
    </div>
  )
}

export default CarSlider