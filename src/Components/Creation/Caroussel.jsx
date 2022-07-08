import { render } from '@testing-library/react';
import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import CardCreation from './CardCreation';


const handleDragStart = (e) => e.preventDefault();

const Carousel = () => {
    const bool = true
    const responsive = {
        0: {
            items: 1
        },
        810 : {
            items: 2
        },
        1200 : {
            items: 3
        },
        1536 : {
            items: 4
        }
      }
    const infoCaroussel = [
        {url:"/Images/img_caroussel.png",color1:"#4B0BAB",color2:"#9F5EF5"},
        {url:"/Images/img_caroussel.png",color1:"#E5A820",color2:"#E8B017"},
        {url:"/Images/img_caroussel.png",color1:"#1B239C",color2:"#23ADB7"}
    ]
    const cards = infoCaroussel.map((item,key)=>{
        return (
            <CardCreation item = {item} />
        )
    })
    return (
        <div className='relative flex'>
            <AliceCarousel disableDotsControls={bool} mouseTracking items={cards} responsive={responsive} infinite={bool} renderPrevButton={()=>{return (<div className='w-full relative'><img src="Images/LeftButton.png" alt="" className="w-10 h-10 cursor-pointer absolute right-2"/></div>)}} renderNextButton={()=>{return(<div className='w-full relative'><img src="Images/RightButton.png" alt="" className="w-10 h-10 cursor-pointer absolute left-2"/></div>)}}/>
        </div>
    )
}
export default Carousel
