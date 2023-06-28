// import { Container, Section } from "../templates/LandingPage/components";
import Drawer from "@/components/Drawer";
import Navbar from "@/components/Navbar";
import React from "react";
import Category from "../components/Category";
import Hero from "../components/Hero";

const LandingPage = () => {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <Hero />
        <Category />
      </div>
    </>
  );
};

export default LandingPage;
