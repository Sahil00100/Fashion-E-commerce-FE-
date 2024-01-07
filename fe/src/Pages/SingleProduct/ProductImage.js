import Pic4 from "../../Images/Pic4.jpg";
import Pic3 from "../../Images/Pic3.jpg";
import { Carousel } from "react-bootstrap";
import "./ProductImage.css"
const ProductImage = (props) => {
  return (
    <>
      {/* <div className="col-12 col-lg-6">
        <img className="w-90 rounded-2" src={props.images[0].src} alt={props.images[0].alt} />
        <div className="d-flex mt-4">
          <img className="w-20 me-4 rounded-2" src={props.images[0].src} alt={props.images[0].alt} />
          <img className="w-20 me-4 rounded-2" src={props.images[1].src} alt={props.images[1].alt} />
          <img className="w-20 me-4 rounded-2" src={props.images[2].src} alt={props.images[2].alt} />
          <img className="w-20 rounded-2" src={props.images[3].src} alt={props.images[3].alt} />
        </div>
      </div>  */}

<Carousel controls={false}>
  <Carousel.Item>
    <img className="d-block w-100 max-height-carousel" src={Pic4} alt="First slide" />
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100 max-height-carousel" src={Pic4} alt="Second slide" />
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100 max-height-carousel" src={Pic4} alt="Third slide" />
  </Carousel.Item>
</Carousel>

    </>
  );
};

export default ProductImage;
