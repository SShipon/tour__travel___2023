import { FaFacebook,FaTwitter,FaPhoneVolume,FaLinkedinIn,FaSms,FaLocationArrow } from "react-icons/fa";
import { Link } from 'react-router-dom';

import payment1 from "../../../assets/payment/download.png"
import payment2 from "../../../assets/payment/download (1).png"
import payment3 from "../../../assets/payment/download (2).png"
import payment4 from "../../../assets/payment/download (3).png"
import payment5 from "../../../assets/payment/download (4).png"
import { TextHeader } from "../../UI/titleText/Text"


const FooterPage = () => {
  const payments = [ payment1, payment2, payment3, payment4, payment5 ];
  const supports = [ 
    
               {
                pages:"Contact Us",
                link: "/contact"

               },
               {
                pages:"Guide", 
                link: "/guide"

               },
               {
                pages:"Packages",
                link: "/packages"

               },
               {
                pages:"Our Blog",
                link: "/blog"

               },
               {
                pages:"Gallery",
                link: "/gallery"

               }, 
       ];

    return (
        <div className='footer-bg'>  
            <div className="grid grid-cols-4 w-10/12 gap-4 mx-auto">
                <div className='border-2 w-72 text-white item-center'>
                  <p className='text-center'></p>
                </div>

                <div className='border-2 w-64 text-white item-center'>
                  <p className='text-center'>Section 2</p>
                </div>

                <div className='border-2 w-48 text-white item-center'>
                  <TextHeader textHeader="Support" />
                   <div className="mt-6">
                    {supports?.map((support)=><Link className='footer-support' to={support.link}>{support.pages}</Link>)}
                   </div>
                </div>

                <div className='border-2 w-64'>
                  <TextHeader textHeader="We Accept:" />
                  {/* <p className='text-center text-white font-serif mt-5 text-2xl'>We Accept:</p> */}
                  <div className="grid grid-cols-2 gap-y-4 justify-items-center mt-6 ">
                    {payments?.map((payment)=> <img src={ payment } alt="" />)}
                  </div>                 
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