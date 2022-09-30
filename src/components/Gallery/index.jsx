import left from "../../assets/images/arrow-left.png"
import right from "../../assets/images/arrow-right.png"
import "./Gallery.css"
import { useState } from "react"


function Gallery({ listOfPictures }) {
  const [currentImage, setCurrentImage] = useState(0)

  function next() {
    currentImage === listOfPictures.length - 1 ? setCurrentImage(0) : setCurrentImage(currentImage + 1)
  }

  function prev() {
    currentImage === 0 ? setCurrentImage(listOfPictures.length - 1) : setCurrentImage(currentImage - 1)
  }

  return (
    <section className="bgApartment" style={{ backgroundImage: `url(${listOfPictures[currentImage]})` }}>
      {listOfPictures.length > 1 && <img className="arrow-right" src={right} alt="arrowRight" onClick={next} />}
      {listOfPictures.length > 1 && <span className="number-image">{currentImage + 1}/{listOfPictures.length}</span>}
      {listOfPictures.length > 1 && <img className="arrow-left" src={left} alt="arrowLeft" onClick={prev} />}
    </section>
  )
}
export default Gallery