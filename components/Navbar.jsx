import { Heart, ShoppingBag, MoveDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Drawer from "./Drawer";

const Navbar = ({ cartAnimate }): React.JSX.Element => {
  const [show, setShow] = useState(false);
  const toggle = useRef(null);

  return (
    <>
      <div className="w-full flex justify-between items-center px-36 py-12 sticky top-0 z-10 bg-white h-28">
        {/* Left */}
        <Link href="/" className="w-1/3">
          <Image src="/logo.png" alt="" width={128} height={128} />{" "}
        </Link>
        {/* End left */}
        <div className="w-1/3 flex justify-center gap-8 text-lg">
          <Link href="" className="hover:text-rose-700">
            Home
          </Link>
          <Link href="" className="hover:text-rose-700">
            Men
          </Link>
          <Link href="" className="hover:text-rose-700">
            Women
          </Link>
          <Link href="" className="hover:text-rose-700">
            Kiddo
          </Link>
        </div>
        {/* Right */}
        <div className="w-1/3 text-right flex justify-end gap-6">
          <button>
            <Heart size={24} className="text-slate-700" />
          </button>
          <button onClick={() => setShow(true)}>
            <MoveDown
              className={`${
                cartAnimate
                  ? "animate-bounce absolute top-5"
                  : "invisible absolute"
              }`}
            />
            <ShoppingBag size={24} className="text-slate-700" />
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
            show == true ? "right-0" : "right-[-1000px]"
          } fixed top-0 z-20 duration-200 ease-in-out`}
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
