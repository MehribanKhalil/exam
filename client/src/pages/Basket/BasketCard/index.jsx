import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BasketContext } from "../../../context/BasketContext";

const BasketCard = ({
  image,
  title,
  info,
  authorImage,
  authorName,
  positon,
  price,
  product,
  _id,
  count,
}) => {
  const { decCount, incCount, deleteBasket } = useContext(BasketContext);
  return (
    <div className=" course-card text-center">
      <div>
        <img src={image} alt="" />
      </div>

      <div className=" bg-[#F8F9FB]">
        <div className=" py-10">
          <Link to={`/Course/${_id}`}>
            <h3 className=" cursor-pointer text-2xl  font-medium hover:text-gray-500">
              {title}
            </h3>
          </Link>
          <p className=" text-gray-400 font-semibold">{info}</p>
        </div>

        <div className="py-4 flex  items-center justify-center gap-3">
          <button
            onClick={() => decCount(product)}
            className="border border-main-color rounded-xl px-3 py-1 text-xl flex justify-center items-center"
          >
            -
          </button>
          <span className=" text-2xl">{count}</span>
          <button
            onClick={() => incCount(product)}
            className="border border-main-color rounded-xl px-3 py-1 text-xl flex justify-center items-center"
          >
            +
          </button>
        </div>

        <div className=" pb-5">
          <button
            onClick={() => deleteBasket(_id)}
            className=" text-sm pb-3 border font-semibold border-main-color px-6 py-2"
          >
            Delete
          </button>
        </div>

        <div className=" flex  justify-between ">
          <div className=" py-3 bg-[#EAEBEC] flex  w-full items-center px-8 gap-3">
            <div className="  ">
              <img src={authorImage} className="rounded-full" alt="" />
            </div>
            <div>
              <h3 className=" font-semibold">
                {authorName},{" "}
                <span className=" text-gray-400 font-bold">{positon}</span>{" "}
              </h3>
            </div>
          </div>

          <div className=" bg-main-color text-white flex justify-center items-center text-xl px-3">
            <p>${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
