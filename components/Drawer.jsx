import { X, Trash2 } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useCartStore } from "./utils/cartStore";

import { FormatterPrice } from "./utils/FormatterPrice";

const Drawer = ({ close }) => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const handleRemoveFromCart = (index) => {
    removeFromCart(index);
  };

  // const price = cart.reduce(
  //   (result, item) => parseInt(item.prices.base.value, 10),
  //   0
  // );

  const totalPrice = cart.reduce((total, item) => {
    const price = item.prices.promo
      ? parseInt(item.prices.promo.value)
      : parseInt(item.prices.base.value);
    return total + price;
  }, 0);
  // Format function
  const formatPrice = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };
  // ---

  // const formattedTotalPrice = new Intl.NumberFormat("id-ID", {
  //   style: "currency",
  //   currency: "IDR",
  //   minimumFractionDigits: 0,
  //   maximumFractionDigits: 3,
  // }).format(totalPrice);

  return (
    <>
      <div className="w-[600px] h-screen bg-white p-8 shadow-2xl flex flex-col gap-8">
        <div className="flex justify-between items-center">
          {" "}
          <div className="me-auto flex gap-4">
            {cart.length === 0 ? (
              ""
            ) : (
              <span className="text-xl text-slate-700">My Cart</span>
            )}{" "}
            {/* Clear Button */}
            {cart.length >= 2 ? (
              <button onClick={() => clearCart()}>
                <span className="text-rose-600">Clear</span>
              </button>
            ) : (
              ""
            )}
          </div>
          {/* Close Drawer Button */}
          <button onClick={() => close(false)} className="p-2 bg-slate-50">
            <X className="text-slate-700" />
          </button>
        </div>

        {/* Main Cart */}
        <div className="flex flex-col shop-list gap-8 overflow-y-auto">
          {cart.length === 0 ? (
            <div className="flex flex-1 flex-col h-full justify-start items-center mt-24">
              <img
                draggable={false}
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
                <button className="p-4 bg-rose-700 text-white mt-5 px-10">
                  Explore
                </button>
              </Link>
            </div>
          ) : (
            cart.map((item, index) => {
              const sameProductItems = cart.filter(
                (cartItem) => cartItem.productId === item.productId
              );

              const quantity = sameProductItems.length;

              const isDuplicate = cart.some(
                (cartItem, cartIndex) =>
                  cartItem.productId === item.productId && cartIndex < index
              );

              if (isDuplicate) {
                return null; // Skip rendering for duplicates
              }

              return (
                <div key={index} className="shop-item flex gap-4">
                  <div>
                    <img width={128} src={item.images.main[0].url} alt="" />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <span className="text-lg font-semibold">{item.name} </span>
                    <p className="text-base opacity-50">
                      Size: {item.sizes[1].name}
                    </p>
                    <p className="text-base opacity-50">Qty: {quantity}</p>
                    <p className="mt-auto font-semibold">
                      {item.prices.promo === null ? (
                        <>{FormatterPrice(item.prices.base.value)}</>
                      ) : (
                        <>{FormatterPrice(item.prices.promo.value)}</>
                      )}{" "}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(index)}
                    className="self-start"
                  >
                    <Trash2 className="text-rose-500" />
                  </button>
                </div>
              );
            })
          )}
        </div>
        {/* End Cart */}
        {/* Total */}
        {cart.length === 0 ? (
          ""
        ) : (
          <>
            <div className="flex justify-between mt-auto text-xl">
              <span>Total:</span>
              <span className="font-semibold text-rose-700">
                {FormatterPrice(totalPrice)}
              </span>
            </div>
            <Link
              href="/Cart"
              className="text-center font-semibold uppercase text-xl p-4 bg-slate-50 text-slate-600 hover:bg-emerald-200 duration-200 ease-in-out"
            >
              Continue to Payment
            </Link>
          </>
        )}
        {/* End : Total */}
      </div>

      {/* <button onClick={() => setArr((prev) => [...prev, ""])}></button> */}
    </>
  );
};

export default Drawer;
