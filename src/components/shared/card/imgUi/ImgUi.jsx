

const ImgUi = ({isHovered,img, alt}) => {



  return (
    <>
    <img className={`rounded-[14px] h-60 w-full border-[8px] border-white object-cover transition-all duration-300 ${
    isHovered ? "scale-100 translate-x-3 skew-y-6" : "scale-100"
  }`} src={img} alt={alt} />
    </>
  )
}

export default ImgUi ;