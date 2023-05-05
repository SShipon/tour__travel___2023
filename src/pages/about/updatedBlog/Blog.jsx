import React from 'react';
import ButtonUi from '../../../components/UI/buttons/ButtonUi';
import CardButton from '../../../components/UI/buttons/CardButton';
import './blog.css'
const Blog = ({blog}) => {
    const {img, date, name, comment,description,} = blog ;
    console.log()
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <div className='img__container'>
        <figure><img src={img} alt="Shoes" /></figure>
        </div>
       <div className='date text-center'>
       <p className=''><i class="fa-solid fa-calendar-days"></i> {date}</p>
       </div>
        <div className="card-body">
           <div className='flex justify-between'>
           <span ><i class="fa-solid fa-user"></i> {name}</span>
           <span><i class="fa-solid fa-comment-lines"></i> git {comment}</span>
           </div>
        
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
          <ButtonUi className="btn  btn-primary">Learn now!</ButtonUi>
    </div>
           
            
             
        </div>
      </div>
    );
};

export default Blog;