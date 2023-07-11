import Category from "@/components/Category";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { NextPage } from "next";
import Head from "next/head";
Category;

import Layout from "../components/Layout";
// import Product from "./Product.tsx";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Unoqli | One Stop Cloth Store</title>
      </Head>
      <Navbar />
      <div className="h-screen">
        <Hero />
        <Category />
      </div>{" "}
      <Footer />
    </>
  );
};

export default Index;
