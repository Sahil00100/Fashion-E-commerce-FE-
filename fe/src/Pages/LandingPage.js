import { useState } from "react";
import PromoSectionMain from "./Home/PromoSectionMain";
import ProductCategoryCard from "./Home/ProductCategoryCard";
// import '../../assets/scss/astro-ecommerce.scss';
import '../Pages/scss/astro-ecommerce.scss'
import Navbar from "./Home/Navbar";
const LandingPage = () => {
  const [state,setState]=useState({
    full_description:"The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out.",
    categories: [
      {
        "thumb_src": "/images/category1.jpg",
        "title": "Silk Dresses",
        "collection": "Pre-fall"
      },
      {
        "thumb_src": "/images/category2.jpg",
        "title": "Suits",
        "collection": "Designers"
      },
      {
        "thumb_src": "/images/category3.jpg",
        "title": "Festival",
        "collection": "Summer"
      },
      {
        "thumb_src": "/images/category4.jpg",
        "title": "Showroom",
        "collection": "Sale"
      },
      {
        "thumb_src": "/images/product10.jpg",
        "title": "Living Sofas",
        "collection": "Interior Design"
      },
      {
        "thumb_src": "/images/category5.jpg",
        "title": "Chairs by Designers",
        "collection": "Sale"
      },
      {
        "thumb_src": "/images/product9.jpg",
        "title": "Home care",
        "collection": "Products"
      }
    ],
  })



  return(
    // <Layout title="Landing Page">
	<main>
    <Navbar />
    <PromoSectionMain
      title={"Collection is here"}
      full_description={state.full_description}  
      pageHeaderBgImg={"../images/bg2.jpg"}
      pageHeaderMinVh="90vh"
    />
    <div className="container my-5">
      <div className="d-block text-center mb-5">
        <h3>Shop by category</h3>
        {/* <a className="text-dark font-weight-bold" href="#">Browse all categories &#62;</a> */}
      </div>
      <div className="row mb-5">
        {state.categories.slice(0, 4).map(category => 
          <div className="col-md-6 col-lg-3">
            <ProductCategoryCard
              thumb_src = {category.thumb_src}
              collection = {category.collection}
              title = {category.title}
            />
          </div>
        )}
      </div>

    {/* <PromoSectionLarge 
      title="Basic Starter Pack"
      full_description={data.products[0].full_description} 
      pageHeaderBgImg={"../images/bg2.jpg"} 
      pageHeaderMinVh="50vh"
      pageHeaderRadius="1rem"
    />
    <div class="my-5">
      <ProductFeature
        title="Product Features"
        images={data.products[2].images}
        full_description="Society has put up so many boundaries, so many limitations on what’s right and wrong that it’s almost impossible"
        featuresDetails={data.products[0].featuresDetails}
      />
    </div>
    <div class="mt-5 mb-10">
      <TestimonialsFade 
        pageHeaderBgImg={"https://images.unsplash.com/photo-1519642918688-7e43b19245d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2676&q=80"} 
        pageHeaderMinVh="50vh"
      />
    </div>
    
    <Footer /> */}

    </div>
  </main>

// </Layout>
    
    
    );
};

export default LandingPage;