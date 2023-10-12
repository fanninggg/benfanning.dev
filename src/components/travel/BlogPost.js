import { useState } from 'react';
import { Modal, Carousel } from 'react-bootstrap';
import globe from "../../images/globe.png"

export const BlogPost = (props) => {
  const {day, title, description, images, additionalContent} = props.post

  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState()

  const renderImageCarousel = () => {
    const slides = images.map((image) => {
      return (
        <Carousel.Item key={image.id}>
          <img
            src={image.src}
            alt={`Day ${day} image`}
            className="blog-post-carousel-image"
          />
        </Carousel.Item>
      )
    })
    return (
      <Carousel defaultActiveIndex={selectedPhoto}>
        {slides}
      </Carousel>
    )
  }

  const handleClose = () => setShowModal(false);
  const handleImageClick = (id) => {
    setSelectedPhoto(id)
    setShowModal(true)
  }
  
  return (
    <div className="blog-post">
      <div className="blog-post-splash">
        <div className="globe">
          <img src={globe} alt="South America & Oceania" style={{width: "100%", height: "100%"}}/>
        </div>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
     
      <div className="image-grid">
        {images.map((image) => {
          return (<img src={image.src} alt={`Day ${day} image`} className="blog-post-image" onClick={() => handleImageClick(image.id)} key={image.id} />)
        })}
      </div>

      <p className="additionalContent">{additionalContent}</p>

      <Modal show={showModal} onHide={handleClose} animation={false} className="portfolio-modal blog-post-modal">
        <Modal.Body>
          {renderImageCarousel()}
          <svg className="close-btn blog-post-modal-close-btn" onClick={handleClose} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.8325 10.0001L19.6203 2.21215C20.1271 1.70557 20.1271 0.88651 19.6203 0.379933C19.1137 -0.126644 18.2947 -0.126644 17.7881 0.379933L10.0001 8.16793L2.21233 0.379933C1.70552 -0.126644 0.886688 -0.126644 0.380111 0.379933C-0.126704 0.88651 -0.126704 1.70557 0.380111 2.21215L8.16787 10.0001L0.380111 17.7881C-0.126704 18.2947 -0.126704 19.1138 0.380111 19.6204C0.632569 19.8731 0.964513 20 1.29622 20C1.62793 20 1.95963 19.8731 2.21233 19.6204L10.0001 11.8324L17.7881 19.6204C18.0408 19.8731 18.3725 20 18.7042 20C19.0359 20 19.3676 19.8731 19.6203 19.6204C20.1271 19.1138 20.1271 18.2947 19.6203 17.7881L11.8325 10.0001Z" fill="white" fillOpacity="0.6" />
          </svg>
        </Modal.Body>
      </Modal>
    </div>
  )
}

// TODO: data-aos={determineFadeDirection(index + 1)}
