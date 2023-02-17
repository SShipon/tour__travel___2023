
const ImgUi = ({img, alt}) => {
  return (
    <>
       <figure><img className='rounded-[20px] border-[8px] border-white' src={img} alt={alt} /></figure>
    </>
  )
}

export default ImgUi ;