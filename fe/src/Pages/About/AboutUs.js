import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Logo from "../../Images/Logo.png";

const AboutUs = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <div className="text-center">
          <img className="w-25 mb-4 rounded" src={Logo} alt="Fad Slang Logo" />
          <h2 className="text-4xl font-bold">Fad Slang</h2>
          <span className="block text-muted mb-4">
            Embrace The Extra Ordinary
          </span>
          <p className="text-lg">
            Everyone loves customization. But, what if customization works
            within the budget. Yes, Fad slang weaves your dream styles
            affordably.
          </p>
          <p className="text-lg">What’s new and exciting here?</p>
          <ul className="">
            <li className="mb-1">
              We are 24*7 at your service in all our upcoming outlets at
              Calicut, Erode, and Ernakulam.
            </li>
            <li className="mb-1">
              Customization services that match your ideas.
            </li>
            <li className="mb-1">Quality products available in ₹99 - ₹999.</li>
            <li className="mb-1">
              Premium western, indowestern clothes, Korean styles, and all types
              of uniforms available at wholesale and retail prices.
            </li>
            <li className="mb-1">Single and bulk orders accepted.</li>
          </ul>

          <span className="block text-muted mb-4">
            Phn: +91 487 583 475 834 754
          </span>
          <br />
          <span className="block text-muted mb-4">
            Place: Calicut, Kochi, Malappuram
          </span>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default AboutUs;
