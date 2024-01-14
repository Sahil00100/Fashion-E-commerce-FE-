import { useState, useEffect } from "react";
import ProductView from "./ProductView";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useLocation } from "react-router-dom";
import { ProductsViewApi } from "./ProductViewApis";
const SingleProduct = (props) => {
  let location = useLocation();
  let unq_id = location.state.unq_id;
  const [SelectedProduct, setSelectedProduct] = useState({
    id: null,
    name: null,
    price: null,
    product_code: null,
    size: null,
    color: null,
    images:[],
    amount:null
  });
  const [state, setState] = useState({
    images: [],
    name: null,
    description: null,
    product_code: null,
    price: null,
    category: null,
    product_stock: [],
    sub_variants: [],
    variants: [],
  });

  useEffect(() => {
    const getData = async () => {
      const currentUrl = window.location.href;
      let data = { id: unq_id };
      let productsResponse = await ProductsViewApi.post("", data);

      let productsResponseData = productsResponse.data.data;
      setState({ ...state, ...productsResponseData });
      setSelectedProduct({
        ...SelectedProduct,
        id: productsResponseData?.id,
        name: productsResponseData?.name,
        price: productsResponseData?.price,
        amount: productsResponseData?.price,
        product_code: productsResponseData?.product_code,
        images:productsResponseData?.images,
        Qty:1,
        url:currentUrl
      });
    };
    getData();
  }, [unq_id]);

  console.log(unq_id, "unq_id");

  const classList = "card-body " + "text-" + props.position;
  console.log(state, "11111111111");
  return (
    <>
      <Navbar />
      <div class="container mt-5">
        <ProductView
          state={state}
          SelectedProduct={SelectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
