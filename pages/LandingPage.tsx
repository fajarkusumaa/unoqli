// import { Container, Section } from "../templates/LandingPage/components";
import Drawer from "@/components/Drawer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import Category from "../components/Category";
import Hero from "../components/Hero";

const LandingPage = () => {
  const [cartAnimate, setCartAnimate] = useState(false);
  return (
    <>
      <div className="h-screen">
        <Navbar cartAnimate={cartAnimate} />
        <Hero />
        <Category />
      </div>
    </>
  );
};

export default LandingPage;
