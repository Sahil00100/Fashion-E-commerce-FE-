import { useState } from "react";
import PromoSectionMain from "./PromoSectionMain";
import ProductCategoryCard from "./ProductCategoryCard";
// import '../../assets/scss/astro-ecommerce.scss';
import "../../Pages/scss/astro-ecommerce.scss";
import Navbar from "../../Components/Navbar";
import Pic3 from "../../Images/Pic3.jpg";
import Pic2 from "../../Images/Pic2.jpg";
import Pic1 from "../../Images/Pic1.jpg";
import Footer from "../../Components/Footer"
const LandingPage = () => {
  const [state, setState] = useState({
    full_description:
      "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out.",
    categories: [
      {
        thumb_src: Pic1,
        title: "Silk Dresses",
        collection: "Pre-fall",
      },
      {
        thumb_src: Pic1,
        title: "Suits",
        collection: "Designers",
      },
      {
        thumb_src: Pic1,
        title: "Festival",
        collection: "Summer",
      },
      {
        thumb_src: Pic1,
        title: "Showroom",
        collection: "Sale",
      },
    ],
  });

  return (
    // <Layout title="Landing Page">
    <main>
      <Navbar />
      <PromoSectionMain
        title={"Explore New Collections"}
        full_description={state.full_description}
        pageHeaderMinVh="90vh"
      />

      <div className="container my-5">
        <div className="d-block text-center mb-5">
          <h3>Shop by category</h3>
          {/* <a className="text-dark font-weight-bold" href="#">Browse all categories &#62;</a> */}
        </div>
        <div className="row mb-5">
          {state.categories.slice(0, 4).map((category) => (
            <div className="col-md-6 col-lg-3">
              <ProductCategoryCard
                thumb_src={category.thumb_src}
                collection={category.collection}
                title={category.title}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </main>
  );
};

export default LandingPage;