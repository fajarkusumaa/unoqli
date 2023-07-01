/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";

import { productList } from "../components/utils/productList";

import { Carousel } from "flowbite-react";
import Image from "next/image";
import { useCartStore } from "@/components/utils/cartStore";
import Navbar from "@/components/Navbar";

const product = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const addToCart = useCartStore((state) => state.addToCart);
  const handleAddToCart = (item) => {
    addToCart(item);
  };
  const [list, setList] = useState();

  const callProduct = () => {
    setList(productList.result.items);
  };

  useEffect(() => {
    callProduct();
  }, []);

  if (!list) {
    return <h1>loading...</h1>;
  }

  return (
    <>
      <Navbar />

      <div className="container bg-slate-300 flex justify-center flex-wrap gap-4">
        {list.map((item, i) => (
          <article
            key={i}
            className="p-6 w-1/4 bg-white flex flex-col h-full justify-content-between"
          >
            <p>{item.name}</p>
            <img src={item.images.main[0].url} alt="" />

            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>

            {/* <Carousel indicators={false}>
              {data.images.main.map((images) => (
                // eslint-disable-next-line react/jsx-key
                <img src={images.url} alt="" />
              ))}
            </Carousel> */}
          </article>
        ))}
      </div>
    </>
  );
};

export default product;
