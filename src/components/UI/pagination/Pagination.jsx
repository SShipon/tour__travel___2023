// import React, { useState, useEffect, useRef } from 'react';
// import img1 from "../../../assets/images/b1.png"
// import img2 from "../../../assets/images/b2.png"
// import img3 from "../../../assets/images/b3.png"


// const Pagination = () => {
//     const slides = [img1, img2, img3];
//   const [currentSlide, setCurrentSlide] = useState(0);



//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentSlide((currentSlide + 1) % slides.length);
//     }, 2000);
//     return () => clearInterval(intervalId);
//   }, [currentSlide]);

//   const handleClick = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <div className="relative w-full h-64 overflow-hidden">
//       {slides.map((slide, index) => (
//         <img
//           key={index}
//           className={`absolute w-full h-full object-cover transition duration-500 ease-in-out transform translate-x-full ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
//           style={{ transform: `translateX(${index * 40}%)` }}
//           src={slide}
//           alt=""
//           onClick={() => handleClick(index)}
//         />
//       ))}
//     </div>
//   );
// };

// export default Pagination;

