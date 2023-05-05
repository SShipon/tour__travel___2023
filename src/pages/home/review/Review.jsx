import React from 'react'
import ReviewSection from '../../../components/shared/reviews/ReviewSection';
import { TextHeader, TextTitle } from '../../../components/UI/titleText/Text'

// import images
import img1 from '../../../assets/team/team1.jpg';
import img2 from '../../../assets/team/team2.jpg';
import img3 from '../../../assets/team/team3.jpg';
import img4 from '../../../assets/team/team1.jpg';


const Review = () => {
    let textTitle = `What Our Traveler Say\n About Us` ;

    const reviews = [
        {
            id:1,
            img : img1,
            text: "Farzana Ahmed Nitu",
            description: `
            I am development static and dynamic websites as per your requirements,
            `
         },
        {
            id:2,
            img : img2,
            text: "Maria kim",
            description: `
             Development static and dynamic websites as per your requirements,
            `
         },
        {
            id:3,
            img : img3,
            text: "Dina Lish",
            description: `
            I am development static and dynamic websites as per your requirements,
            
            `
         },
        {
            id:4,
            img : img4,
            text: "Shwan Pall",
            description: `
            I am development static and dynamic websites as per your requirements,
          
            `
         },
    ]
  return (
    <>
      <TextHeader textHeader="Our Traveler Say"/>
      <TextTitle textTitle={textTitle}/>
      <div>
         <ReviewSection reviews={reviews} />
      </div>
    </>
  )
}

export default Review