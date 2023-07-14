import { Heart, ShoppingBag, MoveDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Drawer from "./Drawer";
import { useCartStore } from "./utils/cartStore";

import { Badge, Dropdown } from "flowbite-react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const toggle = useRef(null);

  const cart = useCartStore((state) => state.cart);

  console.log(cart.length);

  return (
    <>
      <div className="w-full flex justify-between items-center px-36 py-auto z-10 bg-white h-24 border-b-2 border-slate-100 backdrop-blur-md bg-opacity-80 ">
        {/* Left */}
        <Link href="/" className="w-1/3">
          <Image src="/logo.png" alt="" width={128} height={128} />{" "}
        </Link>
        {/* End left */}
        <div className="w-1/3 flex justify-center gap-8 text-lg">
          <Link href="/" className="hover:text-rose-700">
            Home
          </Link>
          <Link href="/men" className="hover:text-rose-700">
            Men
          </Link>
          <Link href="/women" className="hover:text-rose-700">
            Women
          </Link>
          <Link href="/kids" className="hover:text-rose-700">
            Kiddo
          </Link>

          {/* <Dropdown inline label="Men">
            <Dropdown.Item>
              <Link href="/men/tops">Tops</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/men/UT">
                UT Collection <span className="text-rose-500 ps-2">New!</span>{" "}
              </Link>
            </Dropdown.Item>
          </Dropdown>

          <Dropdown inline label="Women">
            <Dropdown.Item>
              <Link href="/women/tops">Tops</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/women/UT">
                UT Collection <span className="text-rose-500 ps-2">New!</span>{" "}
              </Link>
            </Dropdown.Item>
          </Dropdown>

          <Dropdown inline label="Kiddo">
            <Dropdown.Item>
              <Link href="/kiddo/tops">Tops</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/kiddo/UT">
                UT Collection <span className="text-rose-500 ps-2">New!</span>{" "}
              </Link>
            </Dropdown.Item>
          </Dropdown> */}
        </div>
        {/* Right */}
        <div className="w-1/3 text-right flex justify-end gap-6">
          <button>
            <Heart
              size={24}
              className="text-slate-700 duration-400 ease-in hover:fill-rose-400 hover:stroke-rose-400 "
            />
          </button>
          <button className="relative" onClick={() => setShow(true)}>
            {/* <MoveDown
              className={`${
                cartAnimate
                  ? "animate-bounce absolute top-[-16px]"
                  : "invisible absolute"
              }`}
            /> */}
            <ShoppingBag
              size={24}
              className="text-slate-700 hover:fill-emerald-200"
            />
            <Badge className="bg-transparent absolute top-[-16px] right-[-10px] px-2 ">
              {cart.length === 0 ? (
                ""
              ) : (
                <span className="text-rose-600">{cart.length}</span>
              )}
            </Badge>{" "}
          </button>
        </div>{" "}
        {/* End right */}
        {/* Drawer Cart*/}
        <div
          onClick={(event) => {
            if (event.target !== toggle.current) setShow(false);
          }}
          className={`${
            show == true
              ? "z-20 opacity-100 bg-slate-700 bg-opacity-50 visible fixed"
              : "z-0 invisible absolute"
          } overlay  w-screen h-screen right-0 top-0 duration-200 ease-in-out`}
        ></div>
        <div
          className={`${
            show == true ? "right-0 fixed visible" : "right-[-1000px] invisible"
          } absolute top-0 z-20 duration-200 ease-in-out `}
        >
          {" "}
          <div ref={toggle} className="">
            <Drawer close={setShow} />
          </div>
        </div>
        {/* End drawer cart */}
      </div>
    </>
  );
};

export default Navbar;
