import img1 from "../../../assets/images/b1.png"
import img2 from "../../../assets/images/b2.png"
import img3 from "../../../assets/images/b3.png"
import img4 from "../../../assets/images/slide2.png"
import img5 from "../../../assets/images/slide3.png"
import img6 from "../../../assets/images/about3.jpg"

import { TextHeader, TextTitle } from '../../../components/UI/titleText/Text'
import Card from "../../../components/shared/card/Card"

const HomeCard = () => {
    let textTitle = ` Select Your Best Package\n For Your Travel !` 

    const cards = [
      {   id: 1,
          img : img1,
          title: "French Rivira, France!",
        
       },
      {   
          id: 2,
          img : img2,
          title: "French , France",
        
       },
      {
          id: 3,
          img : img3,
          title: "French Rivira, France",
        
       },
      {   
          id: 4,
          img : img4,
          title: "French , France",
        
       },
      {
          id: 5,
          img : img5,
          title: "French Rivira, France",
        
       },
      { 
          id: 6,
          img : img6,
          title: "French Rivira, France",
        
       },
  ]
  return (
    <>  
      <TextHeader textHeader="Choose Your Package"/>
      <TextTitle textTitle={textTitle}/>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 mb-10 justify-items-center">
        {
             cards?.length > 0 ? (
              cards?.map((card)=>(    
                <Card widths="w-96" heights="h-60" card={card} />
               ))
             ) : "Our Service is Disable Right Now!!!"
        }
     </div>
    </>
  )
}

export default HomeCard