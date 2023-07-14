import React, { useEffect, useState } from "react";
import { Button, Carousel } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";

import { productUT } from "./utils/productUT";
import Link from "next/link";

const Hero = () => {
  const [datas, setDatas] = useState<any>();

  const callApi = () => {
    setDatas(productUT.result.items);
  };

  useEffect(() => {
    callApi();
  });

  if (!datas) {
    return <h1>Loading su</h1>;
  }

  console.log(datas);

  return (
    <>
      <section className="flex gap-4 h-2/3 bg-gray-100 z-0 justify-center items-center relative">
        <div className="flex container">
          <div className="justify-content-center self-center flex flex-col pe-8 w-1/2 relative">
            <h1 className="font-bold leading-snug text-6xl text-slate-700">
              Welcoming the popular TV anime to UT! <br />
              <span className="text-[#FD3C3C]">Now available</span>
            </h1>
            <Link
              href="/men"
              color="light"
              className="mt-4 w-fit p-4 border-2 bg-slate-800 text-white"
            >
              See more
            </Link>
          </div>
          <div className="w-1/2 h-full ps-4 absolute top-0 right-0">
            <Carousel indicators={false}>
              {datas.map(
                (data: { images: { main: { url: string | undefined }[] } }) => (
                  // eslint-disable-next-line react/jsx-key, @next/next/no-img-element
                  <img
                    className="h-full aspect-square object-cover border-0"
                    src={data.images.main[0].url}
                    alt=""
                  />
                )
              )}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
