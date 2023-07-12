// import { Container, Section } from "../templates/LandingPage/components";
import Drawer from "@/components/Drawer";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import Category from "../components/Category";
import Hero from "../components/Hero";

const LandingPage = () => {
  return (
    <>
      <div className="h-screen">
        <div className="fixed w-full top-0 z-10">
          {" "}
          <Navbar />
        </div>
        <Hero />
        <Category />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
