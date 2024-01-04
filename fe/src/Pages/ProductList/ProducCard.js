

import { useState } from "react";
import BASE_URL from "../../settings";
import ProductBadge from "./productBadge";
const ProductCard = (props) => {
  const [state,setState]=useState({
    full_description:"The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out.",
  })
  const classList = "card-body " + "text-" + props.position;

  return(
    <>
      <div className="card card-product border mb-5 shadow-xs border-radius-lg">
        <a href="#">
          <div className="height-350">
            <img className="w-100 h-100 p-4 rounded-top" src={`${BASE_URL}${props.thumb_src}`} alt={props.thumb_alt} />
          </div>
          <div className={classList}>
            {(props.color) && 
              <h6 className="text-md mb-1 text-body">{props.color}</h6>
            }
            {(props.title) && 
              <h4 className="font-weight-bold">
                {props.title}
              </h4>
            }

            {(props.description) && 
              <p className="text-body">{props.description}</p>
            }
           
            {(props.colors) &&
              <ProductBadge colors={props.colors} />
            }
            
            {(props.price) && 
              <h4 className="mb-0 text-lg mt-1 mb-3">
                ${props.price.toLocaleString()}
              </h4>
            }

            {!(props.description || props.colors || props.color) &&
              <a href="#" className="font-weight-normal text-body text-sm">Shop Now</a>
            }
          </div>
        </a>
      </div>
    </>
  );
};

  export default ProductCard;