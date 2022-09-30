import "./ApartmentDetail.css"
import starChecked from "../../assets/images/star-checked.png";
import star from "../../assets/images/star.png";


import { useParams } from "react-router";
import Data from '../../assets/data/logements.json'
import Error from "../Error";
import Collapse from "../../components/Collapse";
import Gallery from "../../components/Gallery";


function ApartmentDetail() {

  const { apartmentId } = useParams()
  const apartmentData = Data.filter(apart => apart.id === apartmentId)[0];
  if (apartmentData) {

    const stars = parseInt(apartmentData.rating)

    return (
      <div className="Apartment">
        <Gallery listOfPictures={apartmentData.pictures} />
        <section className="row">
          <div className="column">
            <h2 className="text-red">{apartmentData.title}</h2>
            <p className="text-red">{apartmentData.location}</p>
            <div className="tag-display">
              {apartmentData.tags.map(tag => (<span className="tag">{tag}</span>))}
            </div>
          </div>
          <div className="column">
            <div className="row-mobile">
              <div className="prof-position">
                <p className="text-red">{apartmentData.host.name}</p>
                <img className="host-pic" src={apartmentData.host.picture} alt="hostPic" />
              </div>
              <div className="stars-position">
                {[0, 0, 0, 0, 0].map((start, index) => stars > index ? <img src={starChecked} alt="rating" /> : <img src={star} alt="rating" />)}
              </div>
            </div>
          </div>
        </section>

        <div className="row">
          <section className="column">
            <Collapse title={"Description"} description={apartmentData.description} />
          </section>
          <section className="column">
            <Collapse title={"Équipements"} description={apartmentData.equipments.join("\n")} />
          </section>
        </div>
      </div >
    )
  } else {
    return <Error></Error>
  }
}

export default ApartmentDetail;
