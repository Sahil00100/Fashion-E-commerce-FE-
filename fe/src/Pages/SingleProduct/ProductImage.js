import Pic4 from "../../Images/Pic4.jpg";
import Pic3 from "../../Images/Pic3.jpg";
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

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="{Pic4}" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

      
    </>
  );
};

  export default ProductImage;
