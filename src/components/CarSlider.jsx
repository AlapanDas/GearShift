import React from 'react'
import Slider from 'react-slick';
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
    slidesToShow: 2,
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
            <img src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg" alt="hellooo" className=' px-2'/>
          </div>
          <div>
          <img src="https://assets.architecturaldigest.in/photos/60004a09d68a278e29c86a11/16:9/w_2560%2Cc_limit/feature6-1366x768.jpg" alt="hellooo" className=' px-2' />
          </div>
          <div>
          <img src="https://res.cloudinary.com/jerrick/image/upload/v1683417189/6456e8653a97fe001d6cb13b.jpg" alt="hellooo" className=' px-2' />
          </div>     
          <div>
          <img src="https://stat.overdrive.in/wp-content/uploads/2023/03/Untitled-design-2023-03-30T102451.053-900x506.png" alt="hellooo" className=' px-2' />
          </div> 
    </Slider>
    </div>
  )
}

export default CarSlider