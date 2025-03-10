
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  sliderimg1,
  sliderimg2,
  sliderimg3,
  sliderimg4,
  sliderimg5,
} from "../assets";

const HeroSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="slide-1 px-2">
        <img src={sliderimg1} alt="sliderimg1" />
        <div className="mt-3 text-center">
          <h2 className="text-md font-semibold">Prada</h2>
          <p className="text-xs mt-1">Elegance in subtle details</p>
        </div>
      </div>
      <div className="slide-2 px-2">
        <img src={sliderimg2} alt="sliderimg2" />
        <div className="mt-3 text-center">
          <h2 className="text-md font-semibold">Elegance in subtle details</h2>
          <p className="text-xs mt-1">Elegance in subtle details</p>
        </div>
      </div>
      <div className="slide-3 px-2">
        <img src={sliderimg3} alt="sliderimg3" />
        <div className="mt-3 text-center">
          <h2 className="text-md font-semibold">Bold Impressions</h2>
          <p className="text-xs mt-1">Style That Speaks</p>
        </div>
      </div>
      <div className="slide-4 px-2">
        <img src={sliderimg4} alt="sliderimg4" />
        <div className="mt-3 text-center">
          <h2 className="text-md font-semibold">Balenciaga</h2>
          <p className="text-xs mt-1">Invest in contemporary essentials</p>
        </div>
      </div>
      <div className="slide-5 px-2">
        <img src={sliderimg5} alt="sliderimg5" />
        <div className="mt-3 text-center">
          <h2 className="text-md font-semibold">Style Refresh</h2>
          <p className="text-xs mt-1">Say Hello To The New Season</p>
        </div>
      </div>
    </Slider>
  );
};

export default HeroSlider;
