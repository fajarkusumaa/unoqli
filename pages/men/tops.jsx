/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";

import { useCartStore } from "@/components/utils/cartStore";
import { Tops } from "../../components/utils/api/men/Tops";

import Layout from "../../components/Layout";

import {
  Button,
  Carousel,
  Accordion,
  Checkbox,
  FileInput,
  Label,
  Radio,
  RangeSlider,
  Select,
  Textarea,
  TextInput,
  ToggleSwitch,
} from "flowbite-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { ShoppingCart } from "lucide-react";
import Head from "next/head";
import Footer from "../../components/Footer";

import { FormatterPrice } from "../../components/utils/FormatterPrice";
import Article from "../../components/Article";

const product = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const handleAddToCart = (item) => {
    addToCart(item);
    // setCartAnimate(true);
    // setTimeout(() => {
    //   setCartAnimate(false);
    // }, 2000);
  };

  const [total, setTotal] = useState();
  const [list, setList] = useState();

  const [aggregation, setAggregation] = useState();

  // Displayed Items
  const [displayedItems, setDisplayedItems] = useState(8);
  const itemsPerPage = 4;

  const callProduct = () => {
    const totalItems = Tops.result.items;
    const callAggregation = Tops.result.aggregations;
    const slicedItems = Tops.result.items.slice(0, displayedItems);
    setList(slicedItems);
    setTotal(totalItems);
    setAggregation(callAggregation);
  };

  useEffect(() => {
    callProduct();
  }, [displayedItems]);

  const handleLoadMore = () => {
    setDisplayedItems(
      (prevDisplayedItems) => prevDisplayedItems + itemsPerPage
    );
  };
  // ----------------

  // const [cartAnimate, setCartAnimate] = useState(false);

  // // Loading State
  // const [loading, setLoading] = useState(true);
  // console.log(loading);

  if (!list) {
    return (
      <>
        <Head>
          <title>Product | Men</title>
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
        <title>Product | Men</title>
      </Head>

      <Layout>
        <div className="w-screen flex flex-col items-center justify-center mt-5 relative top-1/3">
          {/* Banner */}
          <div className="container h-[450px] bg-slate-50 py-4 my-6 flex justify-center items-center">
            Banner
          </div>
          {/* ! Banner */}
          <div className="container flex py-4 my-6 gap-4">
            <div className="w-1/4 sticky h-full top-[15%] border-2 border-slate-100 p-3">
              <>
                <Accordion collapseAll flush className="border-transparent">
                  <Accordion.Panel>
                    <Accordion.Title>Categories</Accordion.Title>
                    <Accordion.Content>
                      <ul>
                        {aggregation.tree.subcategories.map((subs, i) => (
                          <li key={i} className="p-4 hover:bg-slate-50">
                            <a href="">{subs.name}</a>
                          </li>
                        ))}
                      </ul>{" "}
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title className="border-0">Size</Accordion.Title>
                    <Accordion.Content>
                      <div className="flex flex-wrap gap-4">
                        {aggregation.sizes.map((size, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              id="react-option"
                              value=""
                              class="peer"
                              required=""
                            />
                            <Label
                              className="flex p-4 cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                              for="react-option"
                            >
                              <p>{size.name}</p>
                            </Label>
                          </div>
                        ))}
                      </div>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title className="border-0">
                      Price
                    </Accordion.Title>
                    <Accordion.Content>
                      <div className="flex flex-wrap gap-4">
                        {aggregation.prices.map((price, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">
                              {FormatterPrice(price.from)}{" "}
                              {FormatterPrice(price.to) === 0 ? null : (
                                <>- {FormatterPrice(price.to)}</>
                              )}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title className="border-0">
                      Rating
                    </Accordion.Title>
                    <Accordion.Content>
                      <div className="flex flex-wrap gap-4">
                        <Button
                          flush
                          className="border-2 border-slate-50 bg-transparent text-slate-700 hover:text-white hover:bg-slate-700 flex-1 w"
                        >
                          wkw
                        </Button>
                      </div>
                    </Accordion.Content>
                  </Accordion.Panel>
                </Accordion>
              </>
            </div>

            <div className="flex flex-col w-3/4 gap-2">
              <p>
                Showing{" "}
                <span className="font-semibold">
                  {displayedItems <= total.length
                    ? displayedItems
                    : total.length}
                </span>{" "}
                result from {total.length}
              </p>

              {/* <div className="flex">
              {" "}
              <p className="">Sort by : </p>
              <select name="" id="">
                <p>11</p>
              </select>
            </div> */}

              <div className=" grid grid-cols-4 gap-4 h-fit">
                {list.map((item, i) => (
                  <Article
                    key={i}
                    item={item}
                    handleAddToCart={handleAddToCart}
                  />
                ))}
              </div>

              {/* Button load more */}
              {displayedItems !== total.length ? (
                <button
                  className="mt-10 border-2 border-slate-900  p-4 w-fit mx-auto"
                  onClick={() => handleLoadMore()}
                >
                  Load More
                </button>
              ) : (
                ""
              )}
              {/* End of button */}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default product;
