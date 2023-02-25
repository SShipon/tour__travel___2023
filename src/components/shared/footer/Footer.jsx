// import { FaFacebook,FaTwitter,FaPhoneVolume,FaLinkedinIn,FaSms,FaLocationArrow } from "react-icons/fa";
// import { Link } from 'react-router-dom';

const FooterPage = () => {
    return (
        <div className='footer-bg'>  
            <div className="grid grid-cols-4 w-10/12 gap-4 mx-auto">
                <div className='border-2 w-52 text-white item-center'>
                  <p className='text-center'>Section 1</p>
                </div>

                <div className='border-2 w-64 text-white item-center'>
                  <p className='text-center'>Section 2</p>
                </div>

                <div className='border-2 w-64 text-white item-center'>
                  <p className='text-center'>Section 3</p>
                </div>

                <div className='border-2 w-64 text-white item-center'>
                  <p className='text-center'>Section 4</p>
                </div>
              
            </div>
               <div className='w-10/12 mx-auto mt-8'>
                  <hr className="text-white" />
                  <div className="w-[450px] mx-auto ">
                   <small className='text-white'> Copyright&copy; 2022 Luxury - Travel & Tours| Developed By Nozibul Islam</small>
                  </div>
              </div>
        </div>
    );
};

export default FooterPage;