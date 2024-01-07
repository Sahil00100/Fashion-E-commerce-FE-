import { useState } from "react";
import BASE_URL from "../../settings";
import ProductBadge from "./productBadge";

import "./ProductCardstyle.css"
const ProductCard = (props) => {
  const [state, setState] = useState({
    full_description:
      "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out.",
  });
  const classList = "card-body " + "text-" + "center";
  let {product} = props
  return (
    <>
 <div className="product-card">
      <div className="product-image" style={{ backgroundImage: `url(${product.Photo})` }}></div>
      <div className="product-details">
        <div className="product-title">{product.ProductName}</div>
        {/* <ProductBadge colors={product.ColourList} /> */}
        <div className="product-price">${product.Price}</div>
        {/* <button className="cta-button">Add to Cart</button> */}
        <a href="#" className="font-weight-normal text-body text-sm">Add To Cart</a>
      </div>
    </div>
    </>
  );
};

export default ProductCard;
