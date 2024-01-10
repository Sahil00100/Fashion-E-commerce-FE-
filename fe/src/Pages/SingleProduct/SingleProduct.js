import { useState, useEffect } from "react";
import ProductView from "./ProductView";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useLocation } from "react-router-dom";
import { ProductsViewApi } from "./ProductViewApis";
const SingleProduct = (props) => {
  let location = useLocation();
  let unq_id = location.state.unq_id;

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
      let data = { id: unq_id };
      let productsResponse = await ProductsViewApi.post("", data);

      let productsResponseData = productsResponse.data.data;
      setState({ ...state, ...productsResponseData });
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

        <ProductView state={state} />
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
