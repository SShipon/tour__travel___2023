import { Link } from "react-router-dom"

const CardButton = ({ card, bg }) => {
   
    // decide what to render
    let bgs = bg ? "bg-gradient-to-r from-emerald-500 to-emerald-900" 
     : "bg-gradient-to-r from-slate-300 to-slate-500"
    
    

  return (
    <> 
    <Link to="#">
     <div className={`card-btn ${bgs}`}>
      <p>{card}</p>
    </div>
   </Link> 
  </>
  )
}

export default CardButton