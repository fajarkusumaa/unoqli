import { X, Trash2 } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useCartStore } from "./utils/cartStore";

const Drawer = ({ close }) => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const handleRemoveFromCart = (index) => {
    removeFromCart(index);
  };

  console.log(cart);

  const price = cart.reduce(
    (result, item) => parseInt(item.prices.base.value, 10),
    0
  );
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);

  const totalPrice = cart.reduce(
    (total, item) => total + parseInt(item.prices.base.value, 10),
    0
  );

  const formattedTotalPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2,
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
        <div className="flex flex-col flex-1 shop-list gap-8">
          {cart.length === 0 ? (
            <div className="flex flex-1 flex-col h-full justify-center items-center">
              <img
                className="h-1/3"
                src="https://media.istockphoto.com/id/861576608/vector/empty-shopping-bag-icon-online-business-vector-icon-template.jpg?s=612x612&w=0&k=20&c=I7MbHHcjhRH4Dy0NVpf4ZN4gn8FVDnwn99YdRW2x5k0="
                alt=""
              />{" "}
              <p className="text-xl text-center opacity-80">
                Your cart is empty :(
              </p>
              <p className="text-base text-center opacity-50 pt-2">
                Looks like you have not added anything to your cart. Go ahead &
                explore our store.
              </p>
              <Link href="./Product">
                <button className="p-4 bg-rose-600 text-white mt-5 px-10">
                  Explore
                </button>
              </Link>
            </div>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="shop-item flex gap-4">
                <div>
                  <img width={128} src={item.images.main[0].url} alt="" />
                </div>
                <div className="flex flex-1 flex-col">
                  <span className="text-lg font-semibold">{item.name} </span>
                  <p className="text-base opacity-50">
                    Size: {item.sizes[1].name}
                  </p>
                  <p className="mt-auto font-semibold">{formattedPrice}</p>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(index)}
                  className="self-start"
                >
                  <Trash2 className="text-rose-500" />
                </button>
              </div>
            ))
          )}
        </div>
        {/* End Cart */}

        <span className="mt-auto text-right font-semibold text-xl p-4 bg-slate-100">
          {" "}
          Total: {formattedTotalPrice}{" "}
        </span>
      </div>

      {/* <button onClick={() => setArr((prev) => [...prev, ""])}></button> */}
    </>
  );
};

export default Drawer;
