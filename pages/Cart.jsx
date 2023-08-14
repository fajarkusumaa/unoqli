/* eslint-disable @next/next/no-img-element */
import React from "react";

import { X, Trash2 } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "../components/utils/cartStore";
import { FormatterPrice } from "../components/utils/FormatterPrice";
import Navbar from "@/components/Navbar";

import Head from "next/head";
import { useState } from "react";

import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useRouter } from "next/router";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

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

  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>

      <div className="fixed w-full top-0 z-40">
        <Navbar />
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="w-screen h-screen absolute bg-opacity-60 bg-slate-900 z-30 flex items-center justify-center">
            <div className="w-64  p-4 flex justify-center">
              <Player
                autoplay
                loop
                src="https://lottie.host/9713c6db-77ea-4f24-bae9-1d057fc560d2/7JMAWSmtQP.json"
                style={{ width: 500, height: 500 }}
              ></Player>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center mx-auto container mt-14 z-20">
        <div className="w-2/3 h-screen bg-white flex flex-col gap-8 p-20">
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
            <div className="flex justify-between mt-auto text-xl pb-12">
              <span>Total:</span>
              <span className="font-semibold text-rose-700">
                {FormatterPrice(totalPrice)}
              </span>
            </div>
          </>

          {/* End : Total */}
        </div>
        <div className="w-1/3 flex py-24">
          <div className="card bg-slate-800 shadow-lg w-full flex-1 text-white p-12 flex flex-col justify-between">
            <div>
              <h5 className="text-xl text-white">Card Details</h5>

              <div className="content flex flex-col gap-4 mt-10 relative cursor-pointer">
                <p className="text-white opacity-30">Card Type</p>

                <div className="card flex flex-col items-start gap-4 p-6 bg-gradient-to-br from-slate-600 to-slate-700 shadow-md relative hover:-translate-x-36 overflow-hidden z-10 ease-in duration-200">
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

                  <div className="text-white my-5 flex gap-4 w-full text-4xl">
                    <span>****</span>
                    <span>****</span>
                    <span>****</span>
                    <span>****</span>
                  </div>

                  <div className="flex justify-between w-full">
                    <span className="text-white">John Doe</span>
                    <span className="float-right text-white">12/10</span>
                  </div>
                </div>

                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png"
                  alt=""
                  className="absolute h-16 top-1/2 right-0"
                />
              </div>
            </div>

            <div id="name">
              <p className="text-white opacity-30">Name on Card</p>
              <input
                type="text"
                value="John Doe"
                placeholder="Your name"
                className="w-full px-0 mt-2 bg-transparent border-0 border-b-[1px] ring-transparent focus:ring-0 focus:border-white duration-0"
              />
            </div>

            <div id="card-number">
              <p className="text-white opacity-30">Card Number</p>
              <input
                type="text"
                value="**** **** **** ****"
                placeholder="Your card number"
                className="w-full px-0 mt-2 bg-transparent border-0 border-b-[1px] ring-transparent focus:ring-0 focus:border-white duration-0"
              />
            </div>
            <div className="flex w-full gap-8">
              <div id="exp" className="flex-1">
                <p className="text-white opacity-30">Experation date</p>

                <div className="flex gap-8">
                  <select
                    name="month"
                    id="month"
                    placeholder="mm"
                    className="px-0 mt-2 flex-1  bg-transparent border-0 border-b-[1px] ring-transparent focus:ring-0 focus:border-white duration-0"
                  >
                    <option value="mm" disabled selected hidden>
                      mm
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>

                  <select
                    name="year"
                    id="year"
                    placeholder="yyyy"
                    className="px-0 mt-2 flex-1 bg-transparent border-0 border-b-[1px] ring-transparent focus:ring-0 focus:border-white duration-0"
                  >
                    <option value="yyyy" disabled selected hidden>
                      yyyy
                    </option>
                    <option value="1">2019</option>
                    <option value="2">2020</option>
                    <option value="3">2022</option>
                    <option value="4">2023</option>
                  </select>
                </div>
              </div>

              <div id="cvv">
                <p className="text-white opacity-30">CVV</p>
                <input
                  type="text"
                  value="**** **** **** ****"
                  placeholder="Your card number"
                  className="w-full px-0 mt-2 bg-transparent border-0 border-b-[1px] ring-transparent focus:ring-0 focus:border-white duration-0"
                />
              </div>
            </div>

            <Link
              href=""
              className="text-center uppercase text-lg mt-8 p-4 ring-2 ring-white text-white duration-200 ease-in-out"
              onClick={() => {
                setShowModal(true);
                setTimeout(() => {
                  setShowModal(false);
                  router.push("/");
                  clearCart();
                }, 2000);
              }}
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
