import ProductCard from "./ProductCard";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useState, useEffect } from "react";

// import data from "./data.json";

// import "./astro-ecommerce.js"
import Pic4 from "../../Images/Pic4.jpg";
import Pic3 from "../../Images/Pic3.jpg";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

import { ProductsListApi } from "./ProductListApis";

const ProductList = (props) => {
  let title = "Our products";
  let dataList = [
    {
      ProductName: "Premium Suit",
      Category: "Suits",
      Price: "500",
      ColourList: ["white", "red", "pink"],
      Photo: Pic4,
    },
    {
      ProductName: "Premium Suit",
      Category: "Suits",
      Price: "500",
      ColourList: ["white", "red", "pink"],
      Photo: Pic4,
    },
    {
      ProductName: "Premium Suit",
      Category: "Suits",
      Price: "500",
      ColourList: ["white", "red", "pink"],
      Photo: Pic4,
    },
    {
      ProductName: "Premium Suit",
      Category: "Suits",
      Price: "500",
      ColourList: ["white", "red", "pink"],
      Photo: Pic4,
    },
    {
      ProductName: "Premium Suit",
      Category: "Suits",
      Price: "500",
      ColourList: ["white", "red", "pink"],
      Photo: Pic4,
    },
    {
      ProductName: "Premium Suit",
      Category: "Suits",
      Price: "500",
      ColourList: ["white", "red", "pink"],
      Photo: Pic4,
    },
    {
      ProductName: "Premium Suit",
      Category: "Suits",
      Price: "500",
      ColourList: ["white", "red", "pink"],
      Photo: Pic4,
    },

  ];


  const [state,setState] = useState({
    ProductList:[]
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = await ProductsListApi.get();
        console.log(productsResponse.data,'------------');
        let ProductList = productsResponse.data.data
        setState((prev)=>{
          return ({...prev,ProductList})
        })
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


  console.log(state,"stt");
  return (
    <>
      <Navbar />
      <div className="container card card-product card-plain mt-5 mb-5">
        <div className="d-block d-sm-flex border-bottom pb-3">
          {title.length !== 0 && <h2 className="mb-3">{title}</h2>}

          <div className="d-flex ms-auto align-items-center">
            <TextField
              InputProps={{
                endAdornment: <SearchIcon style={{ color: "grey" }} />,
                classes: {
                  root: "custom-input-root",
                },
                style: { height: "30px", width: "200px" },
              }}
            />

            <div className="dropdown">
              <button
                className="btn btn-link text-dark mb-0 dropdown-toggle p-2 p-sm-3"
                type="button"
                id="sortButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort
              </button>
              <ul className="dropdown-menu" aria-labelledby="sortButton">
                <li>
                  <a className="dropdown-item" href="javascript:;">
                    Most Popular
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="javascript:;">
                    Best Rating
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="javascript:;">
                    Newest
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="javascript:;">
                    Price: Low to High
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="javascript:;">
                    Price: High to Low
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-md-4">
            <div className="accordion" id="accordionArrivals">
              <div className="accordion-item">
                <h5 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button border-bottom font-weight-bold py-4"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Category
                    <i
                      className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3"
                      aria-hidden="true"
                    ></i>
                    <i
                      className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3"
                      aria-hidden="true"
                    ></i>
                  </button>
                </h5>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionArrivals"
                >
                  <div className="accordion-body text-sm opacity-8">
                    <div className="form-check justify-content-start ">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="customCheck8"
                      />
                      <label htmlFor="customCheck1">Cotton</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="customCheck8"
                      />
                      <label className="custom-control-label mb-0">
                        Leather
                      </label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="customCheck9"
                        checked
                      />
                      <label className="custom-control-label mb-0">
                        Chiffon
                      </label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="customCheck10"
                      />
                      <label className="custom-control-label mb-0">Crepe</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="customCheck11"
                      />
                      <label className="custom-control-label mb-0">Denim</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h5 className="accordion-header" id="headingFifth">
                  <button
                    className="accordion-button border-bottom font-weight-bold py-4"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFifth"
                    aria-expanded="false"
                    aria-controls="collapseFifth"
                  >
                    Size
                    <i
                      className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3"
                      aria-hidden="true"
                    ></i>
                    <i
                      className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3"
                      aria-hidden="true"
                    ></i>
                  </button>
                </h5>
                <div
                  id="collapseFifth"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFifth"
                  data-bs-parent="#accordionArrivals"
                >
                  <div className="accordion-body text-sm opacity-8">
                    <div className="form-check justify-content-start ">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="customSize1"
                      />
                      <label className="custom-control-label mb-0">XXS</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="customSize2"
                      />
                      <label className="custom-control-label mb-0">XS</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="customSize3"
                      />
                      <label className="custom-control-label mb-0">S</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="customSize4"
                      />
                      <label className="custom-control-label mb-0">M</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="customSize5"
                      />
                      <label className="custom-control-label mb-0">L</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="customSize6"
                      />
                      <label className="custom-control-label mb-0">XL</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="customSize7"
                      />
                      <label className="custom-control-label mb-0">XXL</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8">
            {/* <div className="d-flex h-100"> */}
              <div className="row">
                {state.ProductList.map((product) => (
                  <div class=" col-md-6 col-lg-4">
                    <ProductCard
                      position="center"
                      dataList={dataList}
                      product={product}
                      // product={product}
                    />
                  </div>
                ))}
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductList;
