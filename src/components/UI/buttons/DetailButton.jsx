import { Link } from "react-router-dom"

const DetailButton = ({info}) => {
  return (
    <>
      <Link to="#">
      <div className="card-btn bg-gradient-to-t">
        <p>{info}</p>
     </div>
     </Link> 
    </>
  )
}

export default DetailButton