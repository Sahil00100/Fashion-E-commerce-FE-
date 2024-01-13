import { useState } from "react";
import { BASE_URL, BASE_BACKEND_URL } from "../../settings";
import { useNavigate } from "react-router-dom";

const CartItem = (props) => {
  const navigate = useNavigate();
  let { product } = props;
  console.log(product,"###----------#");
  let image = BASE_BACKEND_URL + product.images[0]["image"];


  const onChange = () =>{
    
  }

  return (
    <>
        <div className="d-flex d-md-flex">
        <img
          className="w-50 w-md-30 rounded-3 img-fluid "
          style={{ maxWidth: "30%" }}
          src={image}
          alt={product.name}
        />
        <div className="w-100 w-md-50 ps-2 ps-md-4">
          <h6
            className="text-md md-text-lg mb-1"
            onClick={() => {
              navigate("/product/view/", { state: { unq_id: product.id } });
            }}
          >
            {product.name}
          </h6>
          <div className="d-block d-sm-flex">
            <p className="pe-3 mb-0">₹{product.price}</p>
            {/* <p className="border-start ps-sm-3 mb-0">{product.sub_variants}</p> */}
          </div>
          <div className="d-block d-md-flex align-items-center mt-2 md-mt-6">
            {/* {props.stock ? (
              <>
                <i className="fas fa-check text-lg text-success"></i>
                <p className="mb-0 ms-2 text-sm">In Stock</p>
              </>
            ) : (
              <>
                <i className="fas fa-minus-circle text-lg"></i>
                <p className="mb-0 ms-2 text-sm">Out of Stock</p>
              </>
            )} */}
          </div>
        </div>
        <div>
          <div className="w-100 w-md-50 mt-4 mt-md-0 mr-md-10">
            <input
              type="number"
              min={0}
              className="form-control"
              placeholder="1"
              aria-label="amount"
              value={product.Qty}
            />
          </div>
          {/* <h4 className="ms-3">${product.price.toLocaleString()}</h4> */}
        </div>
        {/* <div className="w-10 text-end">
          <a href="#">
            <i className="fas fa-times ms-3"></i>
          </a>
        </div> */}
      </div>
    </>
  );
};

export default CartItem;
