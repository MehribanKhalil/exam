import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import MainNavbar from "../../components/NavbarComponents/MainNavbar";
import MobileNav from "../../components/NavbarComponents/MobileNavbar";
import { BasketContext } from "../../context/BasketContext";
import { WishlistContext } from "../../context/WishlistContext";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { wishlist } = useContext(WishlistContext);
  const { basket } = useContext(BasketContext);
  return (
    <nav>
      <nav className=" shadow-lg bg-white fixed max-w-[1100px] py-8 lg:p-0 container mx-auto left-[50%] top-10 -translate-x-[50%] z-10">
        <div className=" flex justify-between">
          <div className=" flex justify-between gap-5 md:gap-32 px-3 md:px-16 items-center">
            <div>
              <NavLink to={"/"} className="flex items-center ">
                <img
                  src="https://preview.colorlib.com/theme/course/images/logo.png"
                  alt=""
                />
                <h5 className=" text-3xl font-bold ">COURSE</h5>
              </NavLink>
            </div>

            <div className="hidden md:flex  gap-6 items-center font-semibold uppercase text-sm">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/About"}>About</NavLink>
              <NavLink to={"/Courses"}>Courses</NavLink>
              <NavLink to={"/admin"}>Admin</NavLink>
              <NavLink to={"/wishlist"}>
                <button className=" relative">
                  <i class="fa-solid fa-heart text-2xl"></i>
                  <span className=" bg-red-600 rounded-full text-white text-sm w-4 h-4 flex justify-center items-center absolute -top-1 -right-2">
                    {wishlist.length}
                  </span>
                </button>
              </NavLink>
              <NavLink to={"/basket"}>
                <button className=" relative">
                  <i class="fa-solid fa-cart-shopping text-2xl"></i>
                  <span className=" bg-red-600 rounded-full text-white text-sm w-4 h-4 flex justify-center items-center absolute -top-1 -right-2">
                    {basket.length}
                  </span>
                </button>
              </NavLink>
            </div>
          </div>

          <div className="p-8 hidden lg:flex bg-main-color text-white font-semibold px-4   items-center gap-3  justify-between">
            <div className=" w-[30px]">
              <img
                src="https://preview.colorlib.com/theme/course/images/phone-call.svg"
                alt=""
              />
            </div>
            <span>+43 4566 7788 2457</span>
          </div>

          <div className=" md:hidden px-5 ">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="  text-3xl"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>
      <MobileNav setIsMobileOpen={setIsMobileOpen} isMobileOpen={isMobileOpen} />
    </nav>
  );
};

export default Navbar;
