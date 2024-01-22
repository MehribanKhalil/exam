import React from "react";
import { NavLink } from "react-router-dom";

const MobileNav = ({ setIsMobileOpen,isMobileOpen }) => {
  return (
    <nav
      className={` translate-x-[300px] w-[300px] ${
        isMobileOpen ? " bg-white !translate-x-0 " : "  "
      }  fixed top-0   right-0 z-40 duration-500 `}
    >
      <div className="flex h-[100vh] justify-center py-10  flex-col top-0 left-0 text-black text-xl gap-6 items-center font-semibold uppercase">
        <div className=" absolute  top-20 right-20 text-3xl">
            <button onClick={()=>setIsMobileOpen(!isMobileOpen)}><i class="fa-solid fa-xmark"></i></button>
        </div>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/About"}>About</NavLink>
        <NavLink to={"/Courses"}>Courses</NavLink>
        <NavLink to={"/admin"}>Admin</NavLink>
        <NavLink to={"/wishlist"}>Wislist</NavLink>
        <NavLink to={"/basket"}>Basket</NavLink>
      </div>
    </nav>
  );
};

export default MobileNav;
