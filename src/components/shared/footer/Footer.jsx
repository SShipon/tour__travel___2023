import { FaPhoneVolume, FaSms, FaLocationArrow } from "react-icons/fa";
import { Link } from 'react-router-dom';

import payment1 from "../../../assets/payment/download.png"
import payment2 from "../../../assets/payment/download (1).png"
import payment3 from "../../../assets/payment/download (2).png"
import payment4 from "../../../assets/payment/download (3).png"
import payment5 from "../../../assets/payment/download (4).png"
import logo from "../../../assets/icon/luxury4.png"
import { TextHeader } from "../../UI/titleText/Text"
import SocialIcon from "../../UI/icons/SocialIcon";


const FooterPage = () => {
  const payments = [ payment1, payment2, payment3, payment4, payment5 ];
  const supports = [ 
    
               {
                pages:"Contact Us",
                link: "/contact"

               },
               {
                pages:"Our Guide", 
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
              
                <div className='w-64 mt-24 text-white item-center'>
                  <img className="h-20" src={logo} alt="" />
                  <p className="mt-4 ">Lorem ipsum dolor sit amet conse ctetur, 
                    adipisicing elit. Ipsum harum doloribus animi!
                  </p>
                  <div className="mt-5">
                   <span className="text-2xl font-bold font-serif text-orange-500">Follow Us:</span>
                   <div>
                    <SocialIcon />
                   </div>
                  </div>
                </div>

                <div className='w-60 text-white  '>
                  <TextHeader textHeader="Support" />
                   <div className="mt-6 ml-10">
                    { supports?.map((support)=><Link className='footer-support hover:-translate-y-1 icon-hover' to={support.link}>{support.pages}</Link>)}
                   </div>
                </div>

                <div className='w-60 text-white item-center'>
                <TextHeader textHeader="Contact Us" />

                     <div className='footerContact '>
                        <p><FaPhoneVolume className='footerIcon '></FaPhoneVolume></p>
                           <Link className="flex flex-col" to="#">
                            <p>+8801955555441</p>
                            <p>+8801987554445</p>
                           </Link>
                     </div>

                     <div className='footerContact '>
                       <p><FaSms className='footerIcon '></FaSms> </p>
                          <Link to="#">                          
                          luxury@gmail.com <br />
                          support@luxury.com
                          </Link>
                     </div>

                     <div className='footerContact'>
                        <p><FaLocationArrow className='footerIcon'></FaLocationArrow> </p>
                           <Link to="#">                             
                                2752 Willison Street <br />
                                Eagan, United State.
                           </Link>
                     </div>
                </div>

                <div className='w-64'>
                  <TextHeader textHeader="We Accept" />
                 
                  <div className="grid grid-cols-2 gap-y-4 justify-items-center mt-6 ">
                    {payments?.map((payment)=> <img src={ payment } alt="" />)}
                  </div>                 
                </div>
              
            </div>
               <div className='w-10/12 mx-auto mt-8'>
                  <hr className="text-white" />
                  <div className="w-[450px] mx-auto ">
                   <small className='text-white'> Copyright&copy; 2022 Luxury - Travel & Tours | Developed By shipon</small>
                  </div>
              </div>
        </div>
    );
};

export default FooterPage;