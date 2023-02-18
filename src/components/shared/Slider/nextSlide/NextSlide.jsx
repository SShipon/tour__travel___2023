import { BsChevronBarRight } from "react-icons/bs"

const NextSlide = ({onClick}) => {
  return (
    <div className='absolute right-0 -top-[60px] mr-12 ' onClick={onClick} >
        <div className='arrow-btn'>
         <BsChevronBarRight />
        </div>
    </div>
  )
}

export default NextSlide