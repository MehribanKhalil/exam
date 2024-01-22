import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import SectionHeading from "../../components/CommonComponents/SectionHeading";
import { BasketContext } from "../../context/BasketContext";
import BasketCard from "./BasketCard";

const Basket = () => {
  const {basket}=useContext(BasketContext)

  const subtotal= basket.reduce((basketTotal,basketItem)=>basketTotal+ (basketItem.price*basketItem.count),0)

    return (
    <div className=" section page pt-48">
      <Helmet>
        <title>Basket</title>
      </Helmet>

      <SectionHeading
        title='Basket Products'
      />

      {
        basket.length===0 ? ' ' :
        <div className="  pt-2 text-2xl"> 
          <p>Subtotal: ${subtotal}</p>
        </div>
      }

      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 py-16">
        {basket.length === 0 ? (
          <p className=" text-black text-2xl font-semibold">
            Your Basket Empty{" "}
          </p>
        ) : (
          basket &&
          basket.map((item) => (
            <div key={item._id}>
              <BasketCard {...item} product={item} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Basket;
