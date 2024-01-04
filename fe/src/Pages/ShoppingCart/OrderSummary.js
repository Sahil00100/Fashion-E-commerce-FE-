import { useState } from "react";

const OrderSummary = (props) => {
  const tax = 7;
  const shipping = (props.subtotal >= 100) ?  0 : 25;
  let sum = 0;
  sum+=props.subtotal;

  let variant = "";

  if (props.textColor) {
    variant = ` text-${props.textColor}`;
  }
  return (
    <>
      <ul className="list-unstyled">
        <li className="mt-2">
          <div className="d-flex justify-content-between">
            <p className={`opacity-8` + variant}>Subtotal</p>
            <p className={`fw-bold opacity-8` + variant}>${sum.toLocaleString()}</p>
          </div>
        </li>
        <li className="mt-2">
          <div className="d-flex justify-content-between">
            <p className={`opacity-8` + variant}>Shipping estimate <span data-bs-toggle="tooltip" data-bs-placement="top" title="More information related to shipping" data-container="body" data-animation="true"><i className="fas fa-question-circle text-sm"></i></span></p>
            <p className={`fw-bold opacity-8` + variant}>${shipping.toLocaleString()}</p>
          </div>
        </li>
        <li className="border-bottom mt-2">
          <div className="d-flex justify-content-between">
            <p className={`opacity-8` + variant}>Tax estimate <span data-bs-toggle="tooltip" data-bs-placement="top" title="This may vary depending on the country you are in" data-container="body" data-animation="true"><i className="fas fa-question-circle text-sm"></i></span></p>
            <p className={`fw-bold opacity-8` + variant}>${tax.toLocaleString()}</p>
          </div>
        </li>
        <li className="mt-4">
          <div className="d-flex justify-content-between">
            <h5 className={variant}>Total</h5>
            <h5 className={variant}>${(props.subtotal + shipping + tax).toLocaleString()}</h5>
          </div>
        </li>
      </ul>
    </>
  );
};

  export default OrderSummary;
