
import React, { useState, useEffect } from 'react'
import './ImageSlider.css';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

function ImageSlider({images, interval= 3000}) {

  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(slideInterval);
  }, [slide, interval]);

  const nextSlide = () => {
    setSlide(slide === images.length - 1 ? 0 : slide + 1)

  }

  const prevSlide = () => {
    setSlide(slide === 0 ? images.length - 1 : slide - 1)

  }
  return (
    <div className='container'>
    <div className='slider-container'>
     <BsArrowLeftCircleFill className='left-arrow' onClick={prevSlide}/>
     {images.map((image, index)=>(
       <div>
         <img src={image.src}  key={index} className= {slide === index ? "slider" : "slider slider-hidden"}/>
       </div>
     ))}
     <BsArrowRightCircleFill className='right-arrow' onClick={nextSlide}/>
     <span className='indicators'>
      {images.map(( _, index) =>(
       <button onClick={() => setSlide(index)} key={index} className= {slide === index ? "indicator" : "indicator indicator-inactive"}></button>

      ))}
     </span>
   </div>
  </div>
  
   
  )
}

export default ImageSlider




