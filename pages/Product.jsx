/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";

import { useCartStore } from "@/components/utils/cartStore";
import { productList } from "../components/utils/productList";

import { Carousel } from "flowbite-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { ShoppingCart } from "lucide-react";

const product = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const addToCart = useCartStore((state) => state.addToCart);
  const handleAddToCart = (item) => {
    addToCart(item);
    setCartAnimate(true);
    setTimeout(() => {
      setCartAnimate(false);
    }, 2000);
  };
  const [list, setList] = useState();

  const callProduct = () => {
    setList(productList.result.items);
  };

  useEffect(() => {
    callProduct();
  }, []);

  const [cartAnimate, setCartAnimate] = useState(false);

  if (!list) {
    return (
      <>
        <div className="flex justify-center h-screen w-screen">
          <img
            src="https://miro.medium.com/v2/resize:fit:720/1*CsJ05WEGfunYMLGfsT2sXA.gif"
            alt=""
          />
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar cartAnimate={cartAnimate} />

      <div className="w-screen flex justify-center">
        <div className="container flex">
          <div className="w-1/4 pe-4">
            <p className="p-4 bg-slate-50">List Categories</p>
          </div>
          <div className="w-3/4 flex flex-wrap ps-4">
            {list.map((item, i) => (
              <article
                key={i}
                className="w-1/4 h-[400px] flex flex-col justify-content-between pe-4 mb-4"
              >
                <p className="flex-1 mb-2 font-semibold">{item.name}</p>

                <img src={item.images.main[0].url} alt="" className="" />

                <button
                  className="p-4 bg-gray-800 text-white hover:bg-gray-950"
                  onClick={() => handleAddToCart(item)}
                >
                  <ShoppingCart />
                </button>

                {/* <Carousel indicators={false}>
              {data.images.main.map((images) => (
                // eslint-disable-next-line react/jsx-key
                <img src={images.url} alt="" />
              ))}
            </Carousel> */}
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default product;
