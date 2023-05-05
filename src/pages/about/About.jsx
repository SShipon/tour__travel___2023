import React from 'react';
import UseTitle from '../../Hooks/UseTitle';
import AboutBanner from './aboutBanner/AboutBanner';
import MiniBanner from './miniBanner/MiniBanner';
import UpdatedBlog from './updatedBlog/UpdatedBlog';

const About = () => {
    UseTitle('about')
    return (
        <div className='mt-16 mx-16'>
           <AboutBanner />
           <MiniBanner />
           <UpdatedBlog/>
        </div>
    );
};

export default About;