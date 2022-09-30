
import { Link } from "react-router-dom"
import "./Card.css"
function Card({ title, picture, id }) {
  return (
    <Link to={"/apartment/" + id} className="Card" style={{ backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(0, 0, 0, 0.73)),url(${picture})` }}>
      <h3 className="Card-title">{title}</h3>
    </Link>
  )
}

export default Card