import img1 from "../../../assets/images/b1.png"
import img2 from "../../../assets/images/b2.png"
import img3 from "../../../assets/images/b3.png"
import img4 from "../../../assets/images/slide2.png"
import img5 from "../../../assets/images/slide3.png"
import img6 from "../../../assets/images/about3.jpg"
import MySlider from '../../../components/shared/Slider/MySlider'
import { TextHeader, TextTitle } from '../../../components/UI/titleText/Text'

const HomeSlider = () => {
    let textTitle = `Our Best Packages For\n Your Travel!` ;

    const sliders = [
        {   id: 1,
            img : img1,
            title: "French Rivira, France!",
          
         },
        {   
            id: 2,
            img : img2,
            title: "French , France France",
          
         },
        {
            id: 3,
            img : img3,
            title: "French Rivira, France",
          
         },
        {   
            id: 4,
            img : img4,
            title: "French , France France",
          
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
     <TextHeader textHeader="Choose Our Packages"/>
     <TextTitle textTitle={textTitle}/>
     <MySlider  sliders={sliders} />
    </>
  )
}

export default HomeSlider