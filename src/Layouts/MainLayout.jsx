import React from "react";
import { Outlet } from "react-router";
import NavBar from "../Pages/Shared Components/NavBar";
import Footer from "../Pages/Shared Components/Footer";

const MainLayout = () => {
  return (
    <div className="7xl mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
