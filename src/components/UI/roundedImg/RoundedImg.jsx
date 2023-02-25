import React from 'react'

const RoundedImg = ({img}) => {
  return (
    <img className="rounded-full ring-4  ring-offset-2 ring-slate-50 w-36 h-36 items-center" src={img} alt=" " />

  )
}

export default RoundedImg