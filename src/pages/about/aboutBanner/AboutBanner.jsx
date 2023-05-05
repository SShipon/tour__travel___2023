import React from 'react';
import {IoIosArrowForward } from "react-icons/io";
import './aboutBanner.css'
const AboutBanner = () => {
    return (
       <section className='about'>
             <div className='gtp___about'>
           <div className='about___container m-10 mx-auto text-center'>
              <h1 className='text-3xl font-bold mb-10'>About Us</h1>
               <h6 className='mb-16 font-bold' >Home<span className='text-orange-500'> <i class="fa-solid fa-angle-right"></i> About Us </span></h6>
           </div>
        </div>
       </section>
    );
};

export default AboutBanner;

