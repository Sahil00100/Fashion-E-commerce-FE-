import { useState } from "react";
import BASE_URL from "../../settings";
import { useNavigate } from "react-router-dom";
import Pic4 from "../../Images/Pic4.jpg";
import {BASE_BACKEND_URL} from "../../settings"

import "./ProductCardstyle.css"
const ProductCard = (props) => {

  const navigate = useNavigate();

  const classList = "card-body " + "text-" + "center";
  let {product} = props

  let image = BASE_BACKEND_URL + product.images[0]['image']
  return (
    <>
 <div className="product-card">
      <div className="product-image" style={{ backgroundImage: `url(${image})` }}></div> 
      <div className="product-details">
        <div className="product-title" style={{cursor:"pointer"}} onClick={()=>{navigate(`/product/view/${product.id}`)}}>{product.name}</div>
        {/* <ProductBadge colors={product.ColourList} /> */}
        <div className="product-price">₹{Number(product.price).toFixed(2)}</div>
        {/* <button className="cta-button">Add to Cart</button> */}
        {/* <a href="#" className="font-weight-normal text-body text-sm">Add To Cart</a> */}
      </div>
    </div>
    </>
  );
};

export default ProductCard;
