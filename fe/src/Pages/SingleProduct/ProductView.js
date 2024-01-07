
import ProductImage from "./ProductImage";
import ProductRating from "./ProductRating";
import ProductAccordion from "./ProductAccordion";
import ProductBadge from "../ProductList/productBadge";
const ProductView = (props) => {
 console.log(props,"00000000000");
  return (
    <>
    <div className="card card-product card-plain">
      <div className="row">
        {(props.images?.length !== 0) && 
          <ProductImage images={props.images}/>
        }
        <div className="col-12 col-lg-6 mt-5 mt-lg-0">
          {(props.title?.length !== 0) && 
            <h2>{props.title}</h2>
          }
          {(props.price?.length !== 0) && 
            <>
              <div className="d-flex mb-3">
                <h4 className="font-weight-normal">${props.price?props.price?.toLocaleString():0}</h4>
                <input className="opacity-0" defaultValue={props.price} />
              </div>
            </>
          }
          <p className="mt-4">{props.full_description}</p>

          {(props.rating !== 0) && 
            <div className="d-flex align-items-center">
              <ProductRating rating={props.rating} reviews={props.reviews} />
              <span className="ms-2">100 reviews</span>
            </div>
          }
          
          {(props.colors?.length !== 0) && 
            <>
              <h6 className="mt-4">Color:</h6>
              {(props.colors) &&
                <ProductBadge colors={props.colors} />
              }
            </>
          }
          
          <div className="d-flex align-items-center mt-4">
            <button className="btn btn-dark btn-lg mb-0 me-4">Add to Cart</button>
            <a href="#favorite">
              <i id="heart1" className="far fa-heart text-2xl" ></i>
            </a>
          </div>
            <ProductAccordion data={props.data} />
        </div>
      </div>
    </div>
    </>
  );
};

  export default ProductView;
