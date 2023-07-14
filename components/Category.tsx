/* eslint-disable @next/next/no-img-element */
import React from "react";

import Link from "next/link";

import "./Category";

const Category = () => {
  return (
    <>
      <section className="h-full w-full bg-slate-50 py-36 flex justify-center items-center">
        <div className="flex flex-col container h-full">
          <h1 className="font-bold leading-snug text-4xl mb-16 text-slate-700 ">
            Our Category
          </h1>{" "}
          <div className="flex w-full h-full gap-4">
            <div className=" w-1/3 h-full">
              <div className="flex gap-4 w-full h-full">
                <Link href="/tops" className="flex-1 relative overflow-hidden">
                  <img
                    className="absolute w-full h-full object-cover hover:rotate-3 hover:scale-110 duration-200 ease-in-out"
                    src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/456779/item/idgoods_06_456779.jpg?width=750"
                    alt=""
                  />
                  <div className="overlay absolute z-10 text-3xl bottom-3 left-3 text-white">
                    T-Shirt
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-2/3">
              <div className="flex gap-4 w-full h-full">
                <a href="" className="flex-1  relative overflow-hidden">
                  <img
                    className="absolute w-full h-full object-cover hover:rotate-3 hover:scale-110 duration-200 ease-in-out"
                    src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/462318/item/idgoods_57_462318.jpg?width=750"
                    alt=""
                  />
                  <div className="overlay absolute z-10 text-3xl bottom-3 left-3 text-white">
                    Bottoms
                  </div>
                </a>
                <a href="" className="flex-1  relative overflow-hidden">
                  <img
                    className="absolute w-full h-full object-cover hover:rotate-3 hover:scale-110 duration-200 ease-in-out"
                    src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/453850/item/idgoods_69_453850.jpg?width=750"
                    alt=""
                  />
                  <div className="overlay absolute z-10 text-3xl bottom-3 left-3 text-white">
                    Outerwear
                  </div>
                </a>
              </div>
              <div className="flex gap-4 h-full w-full">
                <a href="" className="flex-1  relative overflow-hidden">
                  <img
                    className="absolute w-full h-full object-cover hover:rotate-3 hover:scale-110 duration-200 ease-in-out"
                    src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/455533/item/idgoods_05_455533.jpg?width=750"
                    alt=""
                  />
                  <div className="overlay absolute z-10 text-3xl bottom-3 left-3 text-white">
                    Shorts
                  </div>
                </a>
                <a href="" className="flex-1  relative overflow-hidden">
                  <img
                    className="absolute w-full h-full object-cover hover:rotate-3 hover:scale-110 duration-200 ease-in-out "
                    src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/461701/sub/goods_461701_sub11.jpg?width=750"
                    alt=""
                  />
                  <div className="overlay absolute z-10 text-3xl bottom-3 left-3 text-white">
                    Jeans
                  </div>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-1/3 h-full">
              <a href="" className=" relative overflow-hidden h-2/3">
                <img
                  className="absolute w-full h-full object-cover hover:rotate-3 hover:scale-110 duration-200 ease-in-out"
                  src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/454315/sub/idgoods_454315_sub2.jpg?width=750"
                  alt=""
                />
                <div className="overlay absolute z-10 text-3xl bottom-3 left-3 text-white">
                  Aerism
                </div>
              </a>

              <a href="" className=" relative overflow-hidden h-1/3">
                <img
                  className="absolute w-full h-full object-cover hover:rotate-3 hover:scale-110 duration-200 ease-in-out"
                  src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/461874/item/idgoods_00_461874.jpg?width=750"
                  alt=""
                />
                <div className="overlay absolute z-10 text-3xl bottom-3 left-3 text-white">
                  UT Collections
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
