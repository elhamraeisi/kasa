import "./Collapse.css"
import arrowDown from "../../assets/images/arrow-down.png";
import arrowUp from "../../assets/images/arrow-up.png";

import { useState } from "react";

function Collapse({ title, description }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div className="collapse" onClick={() => setOpen(!open)}>
        <b>{title}</b>
        {open === true ? <img className="arrowDown" src={arrowUp} alt="arrow" /> :
          <img className="arrowDown" src={arrowDown} alt="arrow" />
        }
      </div>
      {open === true && <div className="content">
        <p>{description}</p>
      </div>}
    </div>
  )
}



export default Collapse