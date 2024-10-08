import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/header/navbar";
import Footer from "./components/footer/footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
