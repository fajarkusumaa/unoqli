/* eslint-disable @next/next/no-img-element */
import React from "react";

import { X, Trash2 } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "../components/utils/cartStore";
import { FormatterPrice } from "../components/utils/FormatterPrice";
import Image from "next/image";
import Head from "next/head";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const price = cart.reduce(
    (result, item) => parseInt(item.prices.base.value, 10),
    0,
  );

  const handleRemoveFromCart = (index) => {
    removeFromCart(index);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + parseInt(item.prices.base.value, 10),
    0,
  );

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>

      <div className="flex justify-center mx-auto container">
        <div className="w-2/3 h-screen bg-white flex flex-col gap-8 p-16">
          <div className="flex flex-col shop-list gap-8 overflow-y-auto pe-2">
            <span className="text-2xl text-gray-800">Your Cart</span>
            {cart.map((item, index) => {
              const sameProductItems = cart.filter(
                (cartItem) => cartItem.productId === item.productId,
              );

              const quantity = sameProductItems.length;

              const isDuplicate = cart.some(
                (cartItem, cartIndex) =>
                  cartItem.productId === item.productId && cartIndex < index,
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
                      Size: {item.sizes[0].name}
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
            })}
          </div>
          {/* End Cart */}
          {/* Total */}

          <>
            <div className="flex justify-between mt-auto text-xl">
              <span>Total:</span>
              <span className="font-semibold text-rose-700">
                {FormatterPrice(totalPrice)}
              </span>
            </div>
          </>

          {/* End : Total */}
        </div>
        <div className="w-1/3 flex py-16">
          <div className="card bg-slate-800 shadow-lg w-full flex-1 text-white p-8 flex flex-col justify-between">
            <div>
              <h5 className="text-xl text-white">Card Details</h5>

              <div className="content flex flex-col gap-4 mt-10">
                <p className="text-white opacity-30">Card Type</p>

                <div className="card flex flex-col items-start gap-4 p-6 bg-gradient-to-br from-slate-600 to-slate-700 shadow-md relative right-16 overflow-hidden">
                  <img
                    src="https://www.pngall.com/wp-content/uploads/2017/05/Visa-Logo-PNG-Image.png"
                    alt=""
                    className="h-4 object-contain"
                  />
                  <img
                    src="https://www.pngall.com/wp-content/uploads/2017/05/Visa-Logo-PNG-Image.png"
                    alt=""
                    className="absolute -right-4 -top-2 w-64 opacity-5"
                  />

                  <p className="text-white mt-5">**** **** **** ****</p>
                </div>
              </div>
            </div>

            <Link
              href="/Cart"
              className="text-center font-semibold uppercase text-xl p-4 ring-2 ring-white text-white duration-200 ease-in-out"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
