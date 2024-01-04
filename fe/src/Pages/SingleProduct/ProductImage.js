
const ProductImage = (props) => {
 
  return (
    <>
      <div className="col-12 col-lg-6">
        <img className="w-90 rounded-2" src={props.images[0].src} alt={props.images[0].alt} />
        <div className="d-flex mt-4">
          <img className="w-20 me-4 rounded-2" src={props.images[0].src} alt={props.images[0].alt} />
          <img className="w-20 me-4 rounded-2" src={props.images[1].src} alt={props.images[1].alt} />
          <img className="w-20 me-4 rounded-2" src={props.images[2].src} alt={props.images[2].alt} />
          <img className="w-20 rounded-2" src={props.images[3].src} alt={props.images[3].alt} />
        </div>
      </div> 
    </>
  );
};

  export default ProductImage;
