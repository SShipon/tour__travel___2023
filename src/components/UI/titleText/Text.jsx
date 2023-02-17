
export const TextHeader = ({textHeader}) => {
  
  return (
    <>
      <article className="text-center mt-20">
         <span className="text-2xl font-bold font-serif text-orange-500">{textHeader}</span>
      </article>
    </>
  )
}

export const TextTitle = ({textTitle}) => {
  return (
    <>
      <article className="text-center mt-3">
       <span style ={{whiteSpace:'pre-line'}} className="text-4xl font-bold font-serif text-[rgb(17, 17, 78)]">{textTitle}</span>
      </article>
  </>
  )
}

