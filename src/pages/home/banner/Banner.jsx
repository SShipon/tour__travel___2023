import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';


import img1 from "../../../assets/images/b1.png"
import img2 from "../../../assets/images/b3.png"
import img3 from "../../../assets/images/b2.png"

 const bannerImg = [ img1, img2, img3 ]


// let slideInterval;
const Banner = () => {
   const [currentIndex, setCurrentIndex] = useState(0);


  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? bannerImg.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === bannerImg.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };


  //useEffect(()=>{
   // startSlider()
    // return () => {
    //   pauseSlider();
    // };
  // },[])

  // const startSlider = () => {
  //   slideInterval = setInterval(() => {
  //     nextSlide();
  //   }, 3000);
  // };
  // const pauseSlider = () => {
  //   clearInterval(slideInterval);
  // };

  return (
      <section className=" -mt-24">
        <div className='max-w-full h-[640px] w-full m-auto group'>
        <div
          style={{backgroundImage: `url(${bannerImg[currentIndex]})` }}
          className='w-full h-full bg-center bg-cover duration-1000'
        ></div>
      
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={20} />
        </div>
      
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={20} />
        </div>
        
        </div> 
      </section> 
  ) 
}

export default Banner