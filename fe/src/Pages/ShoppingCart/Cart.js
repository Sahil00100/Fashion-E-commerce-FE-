import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import Pic1 from "../../Images/Pic1.jpg";

const Cart = (props) => {
  const handleSendClick = () => {
    // if (id?.ProductList?.length > 0) {
    // if (stockCheck()) {
    let string = "";

    // id.ProductList.forEach((item, index) => {
    const listofProducts =
      "(${index + 1}) productCode: ${item.data.ProductCode}%0a   Variant: ${item.ProductColor}%0a   SubVariant: ${item.Size}%0a   Quantity: ${item.Quantity}%0a   Link: ${item.ProductLink}%0a";
    string = string + "%0a" + listofProducts;
    // });

    const phoneNumber = "+91 9605007499"; // Replace with your phone number
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      string
    )}`;

    // Open the user's WhatsApp app and pre-fill a message to be sent to your phone number
    window.open(whatsappUrl);
    // } else {
    // setOutofstock({ ...outofstock, is_outofstock: true });
    // swal("Product is Out-of-Stock in Cart");
    // }
    // } else {
    // swal("There is no Product in the cart");
    // }
  };
  const [state, setState] = useState({
    CartList: [],
  });
  //Taking value from local storage
  useEffect(() => {
    const getData = () => {
      const CartList = JSON.parse(localStorage.getItem("CartList")) || [];
      console.log(CartList, "CartList");
      setState((prev) => {
        return { ...prev, CartList };
      });
    };
    getData();
  }, []);

  const goToHomePage = () => {
    window.location.href = "/";
  };

  // let subtotal = 0;
  // props.products.map((product) => (subtotal += product.price));
console.log(state,"~~~state");
  return (
    <>
      <div className="container mt-2">
        <h2 className="mb-3 text-center">Shopping Cart</h2>

        <div className="row">
          <div className="col-12 col-lg-7">
            {state.CartList.map((product, i) => (
              <>
                {i !== 0 && <hr className="horizontal dark my-4" />}
                <CartItem
                  product={product}
                  setState={setState}
                />
              </>
            ))}
          </div>
          <div className="col-12 col-lg-5 mt-5 mt-lg-0">
            <div className="card shadow-xs border bg-gray-100">
              <div className="card-body p-lg-5">
                <h5 className="mb-4">Order Summary</h5>
                <OrderSummary subtotal={4545} />
                <button
                  className="btn btn-dark btn-lg w-100"
                  style={{ backgroundColor: "#128c7e", border: "none" }}
                  onClick={(e) => handleSendClick(e)}
                >
                  Checkout to Watsapp
                </button>
                <button
                  className="btn btn-white btn-lg w-100"
                  onClick={() => goToHomePage()}
                >
                  Continue Shopping
                </button>
                <p className="text-center">
                  Tax included. Shipping calculated at checkout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
