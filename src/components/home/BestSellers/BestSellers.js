import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Fiddle Leaf Fig"
          price="135.00"
          color="Blank and White"
          badge={true}
          des="One of the most popular houseplants, recognizable by its fiddle-shaped leaves."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Philodendron Moonlight"
          price="69.00"
          color="Gray"
          badge={false}
          des="A stunning houseplant with bright neon leaves that's easy to grow."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Macrame Plant Hanger"
          price="49.00"
          color="Mixed"
          badge={true}
          des="Minimalistic handcrafted macrame hanger. Suitable for small size Bloomspace plants."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Oia Pouch"
          price="27.00"
          color="Black"
          badge={false}
          des="An original designed plant pouch, suitable for Bloomspace plants."
        />
      </div>
    </div>
  );
};

export default BestSellers;
