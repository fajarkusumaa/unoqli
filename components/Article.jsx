import React from "react";

import { FormatterPrice } from "./utils/FormatterPrice";

import { ShoppingCart } from "lucide-react";
import Image from "next/image";

const Article = ({ item, handleAddToCart }) => {
  return (
    <>
      <article className="flex flex-col justify-content-between relative mb-2 min-h-full cursor-pointer">
        {/* Image */}
        <div className="relative h-72">
          <Image
            src={item.images.main[0].url}
            alt=""
            className="aspect-square"
            fill
            style={{ objectFit: "cover", aspectRatio: 1 }}
          />
        </div>
        {/* Shop Button */}
        <button
          className="p-2 bg-gray-800 text-white hover:bg-gray-950 rounded-xl top-0 right-0 absolute"
          onClick={() => handleAddToCart(item)}
        >
          <ShoppingCart />
        </button>
        {/* Name */}
        <p className="mt-2 text-base font-semibold line-clamp-2 overflow-hidden text-ellipsis">
          {item.name}
        </p>
        {/* Div Price */}
        <div className="flex gap-2 mt-auto ">
          {/* Final Price */}
          <p className="font-semibold text-rose-700 text-xl">
            {item.prices.promo === null ? (
              <>{FormatterPrice(item.prices.base.value)}</>
            ) : (
              <>{FormatterPrice(item.prices.promo.value)}</>
            )}
          </p>
          {/* Real price before promo */}
          <p className="text-base opacity-50 line-through">
            {item.prices.promo === null ? null : (
              <>{FormatterPrice(item.prices.base.value)}</>
            )}
          </p>
        </div>
        {/* End div price */}
      </article>
    </>
  );
};

export default Article;
