import React from 'react';
import './miniBanner.css'
import img from "../../../assets/images/d-11.63850c41.png"
const MiniBanner = () => {
    return (
       <section className='main___container'>
             <div className='banner__container'>
           <div className='banner'>
              <img src={img} alt="" />
            </div> 
            <div className='banner'>
                <h6 className='text-orange-500 font-bold'>About TourX</h6>
                <h5 className='sm:text-5xl font-bold  my-4'>The Best Travel <br /> Agency Company.</h5>
                <p>Fusce aliquam luctus est, eget tincidunt velit scelerisque rhoncus. Aliquam lacinia ipsum ornare, porttitor risus nec, mattis mauris. Nunc nec ornare nisi, vel elementum est. Proin malesuada venenatis ex, eu fringilla justo scelerisque sit amet. Sed fringilla nec purus non venenatis. Aliquam nec turpis pharetra, bibendum lorem in, sollicitudin nibh. Nulla sit amet lacus diam.
                justo  
                </p>
            </div>
        </div>
       </section>
    );
};

export default MiniBanner;