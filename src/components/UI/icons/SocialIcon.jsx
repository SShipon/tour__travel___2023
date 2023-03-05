import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { RiGlobalFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const SocialIcon = () => {
    const socials = [ 
        {
            link: "/",
            icon: <FaFacebook />
        },
        {
            link: "/",
            icon: <FaTwitter />
        },
        {
            link: "/",
            icon: <FaLinkedinIn />
        },
        {
            link: "/",
            icon: <RiGlobalFill />
        },
    ]

  return (
    <div className="flex gap-2 mt-4">
        {
            socials?.map((social)=>(
                <Link className="social-icon icon-hover" to={social.link}>{social.icon}</Link>
            ))
        }
    </div>
  )
}

export default SocialIcon