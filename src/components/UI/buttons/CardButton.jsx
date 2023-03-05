import { Link } from "react-router-dom"

const CardButton = ({card, bg}) => {
   
    // decide what to render
    let bgs = bg ? "t" : "br" ;
    

  return (
    <>
    <Link to="#">
    <div className={`card-btn bg-gradient-to-${bgs}`}>
      <p>{card}</p>
   </div>
   </Link> 
  </>
  )
}

export default CardButton