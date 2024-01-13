import ProductCard from "./ProductCard";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useState, useEffect } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Pic4 from "../../Images/Pic4.jpg";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation } from "react-router-dom";

import { ProductsListApi, fetchCategories } from "./ProductListApis";

const ProductList = (props) => {
  let location = useLocation();
  const CategoryID = location.state.CategoryID;
  console.log(CategoryID,"yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
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

  const [page, setPage] = useState(1);
  const [state,setState] = useState({
    count:1,
    search:"",
    ProductList:[],
    CategoriesList:CategoryID?[{id:CategoryID,is_true:true}]:[],
    SubVariantList:[],
    Sort:[
      // {name:'Most Popular',is_true:false},
      // {name:'Best Rating',is_true:false},
      {id:1,name:'Newest',is_true:false},
      {id:2,name:'Price: Low to High',is_true:false},
      {id:3,name:'Price: High to Low',is_true:false},
    ]
  })
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  useEffect(() => {
    const fetchDataCatogory = async () => {
      try {
        const { categorydata: categories, subvariantsdata: subvariants } = await fetchCategories();
  
        let categories_list = categories.map(element => ({
          ...element,
          is_true: false
        }));
        console.log("kkkk1111");
        if (CategoryID) {
          categories_list = categories_list.map(item => 
            item.id === CategoryID ? { ...item, is_true: true } : item
            );
            console.log("kkkk");
        }
        let subvariants_list = subvariants.map(element => ({
          ...element,
          is_true: false
        }));
  
        console.log(categories_list);
        setState((prev) => {
          return { ...prev, CategoriesList: categories_list, SubVariantList: subvariants_list };
        });
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchDataCatogory();
  }, []); 
 
  const handleChange = (e) => {
    setState((prev) => ({
      ...prev,
      search: e.target.value,
    }));
  };
  const handleCheck = (e,index,name) => {
    name = state[name]
    name[index].is_true = e.target.checked

    setState((prev) => ({
      ...prev,
      [name]:name,
    }));
  };
  const handleReorder = (e,valeobj) => {
    fetchData(valeobj.id)
  };
  const fetchData = async (name) => {
    try {
      // const { search, filter } = state;
      let filtercategory = []
      if (state.CategoriesList?.length > 0){
        const categoriesObject = state.CategoriesList;
        filtercategory = Object.values(categoriesObject).filter(category => category.is_true).map(category => category.id);
      }
      let filtersubvariant = []
      if (state.SubVariantList?.length > 0){
        const subVariantObject = state.SubVariantList;
        filtersubvariant = Object.values(subVariantObject).filter(sub => sub.is_true).map(sub => sub.id);
      }
      // Use the state properties for search and filter
      const productsResponse = await ProductsListApi.get(`?searchTerm=${state.search}&category=${filtercategory}&sub_variants=${filtersubvariant}&order_by=${name}&page_no=${page}&items_per_page=${10}`);
      // console.log(productsResponse, '------------');

      let ProductList = productsResponse.data.data;
      let count = productsResponse.data.count;
      // console.log(productsResponse,"qwertytfghjhgfdfghjhgfd");

      setState((prev) => {
        return { ...prev, ProductList,count };
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const delay = 400;
  
    const fetchDataWithDelay = (searchValue) => {
      setTimeout(() => {
        fetchData(searchValue);
      }, delay);
    };
  
    if (state.search !== "") {
      fetchDataWithDelay(state.search);
    } else {
      fetchData(page);
    }
  }, [state.search, page]); // Include search and filter in the dependency array



  console.log(state,"stt");
  return (
    <>
      <Navbar />
      <div className="container card card-product card-plain mt-5" style={{height:"calc(100vh - 200px)"}}>
        <div className="d-block d-sm-flex border-bottom pb-3">
          {title.length !== 0 && <h2 className="mb-3">{title}</h2>}

          <div className="d-flex ms-auto align-items-center">
            
            <TextField id="standard-basic" label="search" variant="standard" 
            onChange={(e)=> handleChange(e)}
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
                Sort By
              </button>
              <ul className="dropdown-menu" aria-labelledby="sortButton">
                {state.Sort.map((i,index)=>(
                <li>
                  <p className="dropdown-item"  onClick={(e)=>handleReorder(e,i)}>
                    {i.name}
                    
                  </p>
                </li>
                ))}
                {/* <li>
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
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="row mt-5 h-100">
          <div className="col-12 col-md-4" >
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
                    {state.CategoriesList.map((i,index)=>(

                    <div className="form-check justify-content-start ">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        checked={i.is_true}
                        id="customCheck8"
                        onClick={(e)=>handleCheck(e,index,'CategoriesList')}
                      />
                      <label htmlFor="customCheck1">{i.name}</label>
                    </div>
                    ))}
                    {/* <div className="form-check justify-content-start ">
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
                    </div> */}
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
                  {state.SubVariantList.map((i,index)=>(
                    <div className="form-check justify-content-start ">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        checked={i.is_true}
                        onClick={(e)=>handleCheck(e,index,'SubVariantList')}
                        id="customSize1"
                      />
                      <label className="custom-control-label mb-0">{i.name}</label>
                    </div>
                    ))}
                    {/* <div className="form-check justify-content-start ">
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
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8">
            {/* <div className="d-flex h-100"> */}
              <div className="row" style={{height:"90%"}}>
                {state.ProductList.map((product) => (
                  <div className=" col-md-6 col-lg-4">
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
            <Stack spacing={2} sx={{justifyContent:"center"}}>
            <Pagination count={state.count} onPageChange={handleChangePage} rowsPerPage={10}/>
          </Stack>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductList;
