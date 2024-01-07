import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Logo from "../../Images/Logo.png"
const AboutUs = (props) => {
  return (
    <>
      <Navbar />

      <div className="text-center">
      <img className="w-20 me-4 rounded-2" src={Logo} alt={'Fad Slang Logo'} />
      <h2 className="text-4xl font-bold">Fad Slang</h2>
      <span className="block text-gray-500 mb-4">A clothing Brand</span>

      <p className="text-lg leading-relaxed">
        Your description goes here. Provide information about your brand and what makes it unique.
      </p>
      <span className="block text-gray-500 mb-4">Phn : +91 487583475834754</span>
<br></br>      <span className="block text-gray-500 mb-4">Place : Calicut,Kochi,Malappuram</span>

    </div>

      {/* <Footer /> */}
    </>
  );
};

export default AboutUs;
