import { X, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { useCartStore } from "../components/utils/cartStore";

const Drawer = ({ close }) => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const handleRemoveFromCart = (index) => {
    removeFromCart(index);
  };

  console.log(cart);

  const totalPrice = cart.reduce(
    (total, item) => total + parseInt(item.prices.base.value, 10),
    0
  );

  const formattedTotalPrice = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  }).format(totalPrice);

  return (
    <>
      <div className="w-[600px] h-screen bg-white p-8 shadow-2xl flex flex-col gap-8">
        <div className="flex justify-between items-center">
          {" "}
          <span className="text-xl text-slate-700">My Cart</span>
          <button onClick={() => close(false)} className="p-2 bg-slate-100">
            <X className="text-slate-700" />
          </button>{" "}
        </div>
        {/* Main Cart */}
        <div className="flex flex-col shop-list gap-8">
          {cart.map((item, index) => (
            <div key={index} className="shop-item flex flex-1 gap-4">
              <div>
                <img width={128} src={item.images.main[0].url} alt="" />
              </div>
              <div className="flex flex-1 flex-col">
                <span className="text-lg font-semibold">{item.name} </span>
                <p className="text-base opacity-50">
                  Size: {item.sizes[1].name}
                </p>
                <p className="mt-auto font-semibold">
                  Rp {item.prices.base.value}
                </p>
              </div>
              <button
                onClick={() => handleRemoveFromCart(index)}
                className="self-start"
              >
                <Trash2 className="text-rose-500" />
              </button>
            </div>
          ))}
        </div>
        {/* End Cart */}

        <span> Total: Rp {formattedTotalPrice} </span>
      </div>

      {/* <button onClick={() => setArr((prev) => [...prev, ""])}></button> */}
    </>
  );
};

export default Drawer;
