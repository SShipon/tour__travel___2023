import { TextHeader, TextTitle } from "../../../components/UI/titleText/Text"
import img1 from "../../../assets/images/b1.png"
import img2 from "../../../assets/images/b2.png"
import img3 from "../../../assets/images/b3.png"
import Card from "../../../components/shared/card/Card"


const HomeBlog = () => {

    let textTitle = ` Stay Updated And New\n Post Our Blog !` 

    const blogs = [
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
   
  ]

  return (
    <>
      <TextHeader textHeader="Latest Blog"/>
      <TextTitle textTitle={textTitle}/>

      <div className="grid grid-cols-3 gap-y-6 mb-10 justify-items-center">
        {
             blogs?.length > 0 ? (
              blogs?.map((blog)=>(    
                <Card widths="w-96" heights="h-60" card={blog} blog />
               ))
             ) : "Our Blog is Not Available Right Now!!!"
        }
     </div>
    </>
  )
}

export default HomeBlog