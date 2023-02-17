import React from 'react'
import { TextHeader, TextTitle } from '../../../components/UI/titleText/Text'

const HomeCard = () => {
    let textTitle = ` Select Your Best Package\n For Your Travel !`
   
  return (
    <>  
      <TextHeader textHeader="Choose Your Package"/>
      <TextTitle textTitle={textTitle}/>
    </>
  )
}

export default HomeCard