import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Journals" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Plant net.</span>{" "}
          <p><b>What Sets Us Apart?</b></p>
          <p><b>Expertly Curated Selection:</b> Our team of plant enthusiasts carefully curates each plant in our collection. 
          Whether you're a seasoned plant parent or a first-time plant owner, you'll find something to love in our thoughtfully chosen selection.</p>
          <p></p>
          <p><b>Educational Resources:</b> We don't just sell plants; we share our knowledge. Explore our blog for tips on plant care, styling ideas, and inspiration to make your green journey even more enjoyable.</p>

          <p><b>Sustainable Practices:</b> Plant net. is committed to sustainability. We strive to minimize our environmental impact by using eco-friendly packaging and supporting ethical plant suppliers.</p>
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Journal;
