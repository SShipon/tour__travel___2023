import { Link } from "react-router-dom"

const AddButton = ({addCard}) => {
  return (
    <>
      <Link to="/">
        <div className="card-btn bg-gradient-to-br">
          <p>{addCard}</p>
        </div>
      </Link>
    </>
  )
}

export default AddButton ;


