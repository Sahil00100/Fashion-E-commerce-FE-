import ProductImage from "./ProductImage";
import ProductRating from "./ProductRating";
import ProductAccordion from "./ProductAccordion";
import ProductBadge from "../ProductList/productBadge";
import SizeSelector from "./SizeSelector";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductView = (props) => {
  const { state } = props;
  const navigate = useNavigate();

  const [IsCart, setIsCart] = useState(false);
  const onClickCart = () => {
    setIsCart(true)
    const existingCartList = JSON.parse(localStorage.getItem("CartList")) || [];
    const updatedCartList = [...existingCartList, state];
    localStorage.setItem("CartList", JSON.stringify(updatedCartList));
    
  };

  const sizeID = Date.now();
  return (
    <>
      <div className="card card-product card-plain ">
        <div className="row d-flex justify-content-between">
          {state.images?.length !== 0 && (
            <div className="col-12 col-lg-6 mt-5 mt-lg-0">
              <ProductImage images={state.images} />
            </div>
          )}
          <div className="col-12 col-lg-6 mt-5 mt-lg-0">
            {state.name?.length !== 0 && <h2>{state.name}</h2>}
            {state.price?.length !== 0 && (
              <>
                <div className="d-flex mb-3">
                  <h4 className="font-weight-normal">
                    ${state.price ? state.price?.toLocaleString() : 0}
                  </h4>
                  <input className="opacity-0" defaultValue={state.price} />
                </div>
              </>
            )}
            <p className="mt-4">{state.description}</p>

            <div className="mt-4 d-flex me-4 justify-content-between align-items-center">
              <h6 className="mb-0">Size</h6>
            </div>
            <div className="d-flex flex-wrap text-center my-4">
              {/* {Object.entries(state.sub_variants).map(([size, amount], i) => 

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
            )} */}

              <SizeSelector sizes={state.sub_variants} />
            </div>

            {state.variants?.length !== 0 && (
              <>
                <h6 className="mt-4">Color:</h6>
                {state.variants && <ProductBadge colors={state.variants} />}
              </>
            )}

            <div className="d-flex align-items-center mt-4">
              {IsCart ? (
                <>
                  <button
                    className="btn btn-dark btn-lg mb-0 me-4"
                    onClick={() => {
                      navigate("/cart");
                    }}
                  >
                    Go To Cart
                  </button>
                </>
              ) : (
                <button
                  className="btn btn-dark btn-lg mb-0 me-4"
                  onClick={() => {
                    onClickCart();
                  }}
                >
                  Add to Cart
                </button>
              )}
              <a href="#favorite">
                <i id="heart1" className="far fa-heart text-2xl"></i>
              </a>
            </div>
            {/* <ProductAccordion data={props.data} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductView;
