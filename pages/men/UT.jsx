/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";

import { useCartStore } from "@/components/utils/cartStore";
import { productUT } from "../../components/utils/productUT";

import Navbar from "@/components/Navbar";
import { ShoppingCart } from "lucide-react";
import Head from "next/head";
import Article from "../../components/Article";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";

const ProductUT = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const addToCart = useCartStore((state) => state.addToCart);
  const handleAddToCart = (item) => {
    addToCart(item);
    setCartAnimate(true);
    setTimeout(() => {
      setCartAnimate(false);
    }, 2000);
  };
  const [total, setTotal] = useState();
  const [list, setList] = useState();

  // Displayed Items

  const [displayedItems, setDisplayedItems] = useState(8);
  const itemsPerPage = 4;

  const callProduct = () => {
    const totalItems = productUT.result.items;
    const slicedItems = productUT.result.items.slice(0, displayedItems);
    setList(slicedItems);
    setTotal(totalItems);
  };

  useEffect(() => {
    callProduct();
  }, [displayedItems]);

  const handleLoadMore = () => {
    setDisplayedItems(
      (prevDisplayedItems) => prevDisplayedItems + itemsPerPage
    );

    console.log(displayedItems);
  };

  const [cartAnimate, setCartAnimate] = useState(false);

  if (!list) {
    return (
      <>
        <Head>
          <title>UT Collection</title>
        </Head>
        <div className="flex justify-center h-screen w-screen items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
            alt=""
            style={{ width: 120, height: 100 }}
          />
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>UT Collection</title>
      </Head>

      <Layout>
        <div className="w-screen flex flex-col items-center justify-center mt-5 relative top-1/3">
          {/* Banner */}
          <div className="container h-[450px] bg-slate-50 py-4 my-4 flex justify-center items-center">
            Banner
          </div>
          {/* ! Banner */}
          <div className="container flex py-4 my-12 gap-4">
            {/* <div className="w-1/4 sticky h-full top-[15%] border-2 border-slate-100 p-3">
            <Filter />
          </div> */}
            <div className="flex flex-col w-100 gap-2 flex-1">
              <p>
                Show{" "}
                <span className="font-semibold">
                  {displayedItems <= total.length
                    ? displayedItems
                    : total.length}
                </span>{" "}
                from {total.length}
              </p>

              <div className=" grid grid-cols-4 gap-4 h-fit">
                {list.map((item, i) => (
                  <Article
                    key={i}
                    item={item}
                    handleAddToCart={handleAddToCart}
                  />
                ))}
              </div>
              {displayedItems <= total.length ? (
                <button
                  className="mt-4 border-2 border-slate-900  p-4 w-fit mx-auto"
                  onClick={() => handleLoadMore()}
                >
                  Load More
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductUT;
