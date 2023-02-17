import React from 'react'

const CardHeader = ({headerTitle, icon}) => {
  return (
    <>
      <p className="font-semibold text-lg">{icon}{headerTitle}</p>
    </>
  )
}

export default CardHeader