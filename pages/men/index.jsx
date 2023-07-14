/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";

import { useCartStore } from "@/components/utils/cartStore";

import Layout from "../../components/Layout";

import Head from "next/head";

import Article from "../../components/Article";
import Banner from "../../components/Banner";
import Filter from "../../components/Filter";

// import { productAll } from "../../components/utils/api/product/product";
import axios from "axios";

const product = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const [aggregation, setAggregation] = useState();
  console.log(aggregation);

  // Displayed Items
  const [displayedItems, setDisplayedItems] = useState(8);
  const itemsPerPage = 4;

  const [apiUrl, setApiUrl] = useState("/men/tops/tops-collections");
  console.log(apiUrl);

  const allItems = `https://fajarkusumaa.github.io/unoqli/components/utils/api/${apiUrl}/db.json`;

  const [total, setTotal] = useState();
  const [list, setList] = useState();

  console.log(total);
  console.log(list);

  const fetchAllItem = async () => {
    try {
      const response = await axios.get(allItems);
      const slicedItems = response.data.result.items.slice(0, displayedItems);
      setList();

      setList(slicedItems);
      setTotal(response.data.result.items);
      setAggregation(response.data.result.aggregations);

      //
    } catch (error) {
      console.error("error fetching data", error);
    }
  };

  useEffect(() => {
    fetchAllItem();
  }, [displayedItems]);

  const handleLoadMore = () => {
    setDisplayedItems(
      (prevDisplayedItems) => prevDisplayedItems + itemsPerPage
    );
  };

  useEffect(() => {
    fetchAllItem();
    setDisplayedItems(8);
  }, [apiUrl]);

  if (!list) {
    return (
      <>
        <Head>{/* <title>{aggregation.tree.categories.name}</title> */}</Head>
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
        <title>
          {aggregation.tree.genders[0].name}
          {" | "}
          {aggregation.tree.categories[0].name}
        </title>
      </Head>

      <Layout>
        <div className="w-screen flex flex-col items-center justify-center mt-5 relative top-1/3">
          {/* Banner */}
          <Banner list={list} aggregation={aggregation} />
          {/* ! Banner */}
          {/* Main */}
          <div className="container flex py-4 my-6 gap-4">
            <div className="w-1/4 sticky h-full top-[15%] border-2 border-slate-100 p-3">
              <Filter aggregation={aggregation} setUrl={setApiUrl} />
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
