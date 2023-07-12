import Category from "@/components/Category";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { NextPage } from "next";
import Head from "next/head";
Category;

import Layout from "../components/Layout";
import LandingPage from "./LandingPage";
// import Product from "./Product.tsx";

const Index: NextPage = () => {
  return (
    <>
      <div className="relative">
        <Head>
          <title>Unoqli | One Stop Cloth Store</title>
        </Head>

        <div className="z-10">
          <Navbar />
        </div>
        <div className="z-0">
          <LandingPage />
        </div>
      </div>
    </>
  );
};

export default Index;
