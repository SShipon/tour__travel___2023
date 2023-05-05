import React from 'react';
import blogImage from "../../../assets/blogs/b-1.64c64476 (2).png"
import blogImage1 from "../../../assets/blogs/b-2.83389c8c (1).png"
import blogImage2 from "../../../assets/blogs/b-3.f3e9c0bd (1).png"
import Blog from './Blog';
const UpdatedBlog = () => {
   
    const blogs = [
        {
            id:1,
            date:'1 April, 2021',
            img : blogImage,
            name:"Dina Brilen",
            comment: "(3) comment",
            description: `
            Donec Egestas Orci Viverra Fermentum Risus."
            `
         },
        {
            id:2,
            date:'1 April, 2021',
            img : blogImage1,
            name:"Alex hals",
            comment: "(3) comment",
            description: `Praesent Ut Mattis Ante The Nullam Lobortis.`
         },
        {
            id:3,
            date:'1 April, 2021',
            img : blogImage2,
            name:"Dina Jems",
            comment: "(3) comment",
            description: `Maecenas Vehicula Risus Non Neque Tincidunt.`
         },
    ] 
    return (
         <div>
            <p className='text-center text-2xl font-semibold text-orange-500'>Latest Blog</p>
            <h6 className='text-4xl font-bold text-center m-5'>Stay Updated And New <br /> Post Our Blog</h6>
              <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 mb-10 justify-items-center'>
            {
                blogs.map(blog=><Blog
                key={blog.id}
                 blog={blog}
                ></Blog>)
            }
        </div>
         </div>
    );
};

export default UpdatedBlog;