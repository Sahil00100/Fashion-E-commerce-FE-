import { useState } from "react";
import BASE_URL from "../../settings";

const CartItem = (props) => {

  return (
    <>
      <div className="d-block d-md-flex">
        <img className="w-50 w-md-30 rounded-3" src={`${BASE_URL}${props.thumb_src}`} alt={props.thumb_alt} />
        <div className="w-100 w-md-50 ps-md-4">
          <h6 className="text-lg mb-1">{props.title}</h6>
          <div className="d-flex">
            <p className="pe-3 mb-0">{props.color}</p>
            <p className="border-start ps-3 mb-0">{props.size}</p>
          </div>
          <div className="d-flex align-items-center mt-6">
           {(props.stock) ? 
            <>
              <i className="fas fa-check text-lg text-success"></i>
              <p className="mb-0 ms-2 text-sm">In Stock</p>
            </>
            :
            <>
              <i className="fas fa-minus-circle text-lg"></i>
              <p className="mb-0 ms-2 text-sm">Out of Stock</p>
            </>
           }
          </div>
        </div>
        <div className="w-20 w-md-10 mt-4 mt-md-0">
          <input type="number" min={0} className="form-control" placeholder="1" aria-label="amount" />
        </div>
        <h4 className="ms-3">${props.price.toLocaleString()}</h4>

        <div className="w-10 text-end">
          <a href="#">
            <i className="fas fa-times ms-3"></i>
          </a>
        </div>
      </div>
    </>
  );
};

  export default CartItem;
