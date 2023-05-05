import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import './banner.css'

import img1 from "../../../assets/images/b1.png"
import img2 from "../../../assets/images/b3.png"
import img3 from "../../../assets/images/b2.png"
import img4 from '../../../assets/images/bg.png'

 const bannerImg = [ img1, img2, img3 ]


// let slideInterval;
const Banner = () => {
 


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
    <div className="carousel sm:text-justify sm:h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
     
      <a href="#slide4" className="btn btn-circle">❮</a> 
         <div className="sm:p-10">
         <p className="-mt-12 gtp__content"> Lorem, ipsum dolor sit amet  consectetur adipisicing elit. <br /> Cum officia dignissimos culpa animi dicta non ratione minus omnis eius maiores.</p>
         </div>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
      
    </div>
  </div>
</div>
  ) 
}

export default Banner