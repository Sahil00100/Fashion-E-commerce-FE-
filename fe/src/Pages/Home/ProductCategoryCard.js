import { useState } from "react";
import {BASE_URL,BASE_BACKEND_URL} from "../../settings";
import { useNavigate } from "react-router-dom";

const ProductCategoryCard = (props) => {
  const classBody = ((props?.cta != null) ? "align-items-end d-flex" : "text-center w-100 pt-8" );
  const navigate = useNavigate();

  return(
    <>
      <div >
        <div className={`card card-background align-items-start mb-4 mb-lg-0 ${props?.classList}`}>
          <div className="full-background" style={{backgroundImage: `url(${`${BASE_BACKEND_URL}${props.images}`})`, backgroundSize: 'cover'}}></div>
          <div className={`card-body ${classBody}`}>
            <div className="d-block mt-10">
              <p className="text-white font-weight-bold mb-1">{props.collection}</p>
              <h4 className="text-white font-weight-bolder">{props.title}</h4>
              {/* {(cta != null) &&  */}
                <p className="text-white text-sm font-weight-semibold mb-0" style={{cursor:'pointer'}} onClick={()=>{navigate("/product/",{state:{CategoryID:props.id}})}}>See products &#62;</p>  
              {/* } */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

  export default ProductCategoryCard;