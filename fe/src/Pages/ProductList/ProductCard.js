import { useState } from "react";
import BASE_URL from "../../settings";
import ProductBadge from "./productBadge";
import { useNavigate } from "react-router-dom";
import Pic4 from "../../Images/Pic4.jpg";
import {BASE_BACKEND_URL} from "../../settings"

import "./ProductCardstyle.css"
const ProductCard = (props) => {
  const [state, setState] = useState({
    full_description:
      "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out.",
  });
  const navigate = useNavigate();

  const classList = "card-body " + "text-" + "center";
  let {product} = props

  let image = BASE_BACKEND_URL + product.images[0]['image']
  return (
    <>
 <div className="product-card">
      <div className="product-image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="product-details">
        <div className="product-title" style={{cursor:"pointer"}} onClick={()=>{navigate("/product/view/",{state:{unq_id:product.id}})}}>{product.name}</div>
        {/* <ProductBadge colors={product.ColourList} /> */}
        <div className="product-price">₹{product.price}</div>
        {/* <button className="cta-button">Add to Cart</button> */}
        <a href="#" className="font-weight-normal text-body text-sm">Add To Cart</a>
      </div>
    </div>
    </>
  );
};

export default ProductCard;
