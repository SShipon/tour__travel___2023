import { useState } from 'react';
import Slider from 'react-slick';


// import icons
import {BsArrowLeft, BsArrowRight,} from 'react-icons/bs';
import RoundedImg from '../../UI/roundedImg/RoundedImg';
import { Link } from 'react-router-dom';


function SampleNextArrow({onClick}) {
  return (
    <div className='arrow arrow-right ' onClick={onClick}>
      <BsArrowLeft/>
    </div>
  );
}

const SamplePrevArrow=({onClick})=> {
  return (
    <div className='arrow arrow-left' onClick={onClick}>
      <BsArrowRight />
    </div>
  );
}


const ReviewSection=({reviews})=> {

  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 800,
    beforeChange: (_, next)=>setSlideIndex(next),
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         
        }
      }]
  };

  return (
    <>
     <div className="slide">
      <Slider {...settings}>
         {
            reviews.map((review, index)=>(
              
              <div className={index === slideIndex ? 'slide slide-active': 'slide'} key={index}>
               <Link to="/">
                <div className="text-center shadow-2xl w-96 h-96  rounded-3xl bg-emerald-400">
                    <div className="card-body pb-6 items-center ">
                    <RoundedImg img={review.img}/>   
                    <p className='text-5xl tracking-wide text-slate-100 bold'>{review.text}</p>
                    <p className="text-2xl text-slate-100 font-semibold ">{review.description}</p>
                </div>
                </div>
               </Link>
            
              </div>
            ))
          }
         
      </Slider>
        </div>
    </>
  );
}

export default ReviewSection;