

const ImgUi = ({isHovered,img, alt, heights}) => {



  return (
    <>
    <img className={`rounded-xl ${heights} w-full border-[8px] border-white object-cover transition-all duration-300 ${
    isHovered ? "scale-100 translate-x-3 -skew-y-3" : "scale-100"
  }`} src={img} alt={alt} />
    </>
  )
}

export default ImgUi ;