import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import toast, { Toaster } from 'react-hot-toast';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Toaster/>
      <Footer/>
    </>
  );
};

export default MainLayout;
