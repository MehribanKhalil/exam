import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BasketContext } from "../../../context/BasketContext";
import { WishlistContext } from "../../../context/WishlistContext";

const CourseCard = ({
  image,
  title,
  info,
  authorImage,
  authorName,
  positon,
  price,
  product,
  _id
}) => {

  const {wishlist,handleWishlist}=useContext(WishlistContext)
  const {addToBasket}=useContext(BasketContext)

  return (
    <div className=" course-card text-center">
      <div>
        <img src={image} alt="" />
      </div>

      <div className=" bg-[#F8F9FB]">
        <div className=" py-10">
        <Link to={`/${_id}`}>
       <h3 className=" cursor-pointer text-2xl  font-medium hover:text-gray-500">
          {title}
        </h3>
       </Link>
          <p className=" text-gray-400 font-semibold">{info}</p>
        </div>

        <div className=" space-x-3 flex items-center justify-center text-main-color">
          <button onClick={()=>handleWishlist(product)} className=" text-2xl pb-3">
            {
          wishlist.some(x=>x._id === product._id) ?  <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>
            }
            
            
          </button>

          <button onClick={()=>addToBasket(product)} className=" text-2xl pb-3">
          <i class="fa-solid fa-cart-shopping"></i>
            
            
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

export default CourseCard;
