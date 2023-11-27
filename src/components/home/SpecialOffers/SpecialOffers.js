import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={spfOne}
          productName="Bonsai Money Tree"
          price="35.00"
          color="Blank and White"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName="Dracaena Marginata"
          price="80.00"
          color="Gray"
          badge={true}
          des="A variety of dragon tree with minimalistic appearance suitable for modern homes."
        />
        <Product
          _id="1103"
          img={spfThree}
          productName="Christmas Pine"
          price="119.00"
          color="Mixed"
          badge={true}
          des="A real living christmas tree for your home - includes fairy light & ornaments."
        />
        <Product
          _id="1104"
          img={spfFour}
          productName="Shamrock Botanics Garden Tool Set"
          price="150.00"
          color="Black"
          badge={true}
          des="Perfect giftset for both beginner and seasoned gardeners alike."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
