import { GiLuckyFisherman, GiDiscussion } from 'react-icons/gi';
import { FaHandshake } from 'react-icons/fa';
import { DiYeoman } from 'react-icons/di';
import bgImage from "../../../assets/images/bg2.png"
import { TextHeader, TextTitle } from '../../../components/UI/titleText/Text'

const InfoSection = () => {
  let textTitle = ` Why You Are Travel With \n LUXURY...!` 

  return (
    <>
     <div className={` mt-20 pt-1 h-[600px] justify-center bg-no-repeat bg-cover bg-center`} 
      style={{ backgroundImage: `url(${bgImage})`}} >
        
           <div className="pb-10">
            <TextHeader textHeader="Why LUXURY" /> 
            <TextTitle textTitle={textTitle} />
           </div>
          
          <div className=" w-3/4 h-full m-auto  grid grid-cols-4 gap-8">
            <div className="text-center shadow-2xl w-52 h-48 rounded-lg bg-emerald-500">
              <div className="card-body items-center  ">
                <div className='text-slate-100  text-6xl'>
                  <GiLuckyFisherman />
                </div>
                <p className="text-lg tracking-wide text-slate-100 font-semibold ">2000+ Our worldwide guide</p>
              </div>
            </div> 
            <div className="text-center shadow-2xl w-52 h-48 rounded-lg bg-emerald-500">
              <div className="card-body items-center">
                <div className='text-slate-100  text-6xl'>
                  <FaHandshake />
                </div>
                <p className="text-lg tracking-wide text-slate-100 font-semibold">100% trusted travel agency</p>
              </div>
            </div> 
            <div className="text-center  shadow-2xl w-52 h-48 rounded-lg bg-emerald-500">
              <div className="card-body items-center">
                <div className='text-slate-100 text-6xl'>
                  <GiDiscussion />
                </div>
                <p className="text-lg tracking-wide text-slate-100 font-semibold">10+ year of travel experience</p>
               </div>
            </div> 
            <div className="text-center shadow-2xl w-52 h-48 rounded-lg bg-emerald-500">
              <div className="card-body items-center">
              <div className='text-slate-100 font text-6xl'>
                  <DiYeoman />
                </div>
                <p className="text-lg tracking-wide text-slate-100 font-semibold">90% of our traveler happy</p>
              </div>
            </div> 
          </div>
     </div>  
  
    </>
  )
}

export default InfoSection