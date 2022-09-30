import { Link } from "react-router-dom";
import "./Error.css"

function Error() {
  return (
    <div className="Error">
      <h1 className="Error-title">404</h1>
      <p className="Error-desc">Oups! La page que vous demandez n'existe pas.</p>
      <Link className="Error-link" to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default Error;