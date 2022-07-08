import React, { useRef ,useEffect ,useState } from "react";
import Slider from "react-slick";
import CardCreation from './CardCreation';
import NextArrow from "./NextArrow";
import PreviousArrow from "./PreviousArrow";

function Caroussel3D () {
  const infoCaroussel = [
    {url:"/Images/00001.png"},
    {url:"/Images/00002.png"},
    {url:"/Images/00003.png"},
    {url:"/Images/00005.png"},
    {url:"/Images/00006.png"},
    {url:"/Images/00007.png"},
    {url:"/Images/00008.png"},
    {url:"/Images/00009.png"},
    {url:"/Images/00010.png"},
    {url:"/Images/00011.png"},
    {url:"/Images/00012.png"},
    {url:"/Images/00012.png"},
    {url:"/Images/00013.png"},
    {url:"/Images/00014.png"},
    {url:"/Images/00015.png"},
    {url:"/Images/00016.png"},
    {url:"/Images/00017.png"},
    {url:"/Images/00018.png"},
    {url:"/Images/00019.png"},
    {url:"/Images/00020.png"},
    {url:"/Images/00021.png"},
    {url:"/Images/00032.png"},
    {url:"/Images/00033.png"},
    {url:"/Images/00034.png"},
    {url:"/Images/00035.png"},
    {url:"/Images/00036.png"},
    {url:"/Images/00037.png"},
    {url:"/Images/00038.png"},
    {url:"/Images/00039.png"},
    {url:"/Images/00040.png"},
    {url:"/Images/00041.png"}
]
const cards = infoCaroussel.map((item,key)=>{
    return (
        <CardCreation item = {item} />
    )
})
const [slide, setSlide] =useState()

const sliderRef=useRef();
useEffect(() => {
  setSlide(sliderRef.current)
}, [sliderRef.current])
    const settings = {
  
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      arrows: true,
      nextArrow:<NextArrow  slider={slide} />,
      prevArrow: <PreviousArrow slider={slide} />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
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
      <div className="w-full mt-10" >
        <Slider
            ref={sliderRef}
         {...settings}>
          {cards}
        </Slider>
      </div>
    );
  }
export default Caroussel3D