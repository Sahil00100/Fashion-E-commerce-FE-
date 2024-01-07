
import ProductImage from "./ProductImage";
import ProductRating from "./ProductRating";
import ProductAccordion from "./ProductAccordion";
import ProductBadge from "../ProductList/productBadge";
const ProductView = (props) => {
 console.log(props,"00000000000");
 const sizeID = Date.now();
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
          <div className="mt-4 d-flex me-4 justify-content-between align-items-center">
            <h6 className="mb-0">Size</h6>
            <a href="#" className="text-body mb-0">Size guide</a>
          </div>
          <div className="d-flex flex-wrap text-center my-4">
            {Object.entries(props.sizes).map(([size, amount], i) => 

            <div className="mb-3 me-3">
              <div className="form-check">
                {(amount !== 0) ?
                  <input className="form-check-input  rounded-2" type="radio" name="flexRadioDefault" id={`input`+ sizeID + i} />
                : 
                  <input className="form-check-input rounded-2" disabled type="radio" name="flexRadioDefault" id={`input`+ sizeID + i} />
                } 
                <label className="cursor-pointer" htmlFor={`input`+ sizeID + i}>{size}</label>
              </div>
            </div>
            )}
          </div>
          
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
