import { BsChevronBarLeft } from "react-icons/bs"


const PrevSlide = ({onClick}) => {
  return (
    <div className='absolute right-[70px] -top-[60px] mr-8' onClick={onClick} >
    <button  className='arrow-btn'>
     <BsChevronBarLeft />
    </button>
</div>
  )
}

export default PrevSlide