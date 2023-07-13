import { Carousel } from "flowbite-react";
import React from "react";
import Image from "next/image";

const Banner = ({ list, aggregation }) => {
  return (
    <>
      {/* Banner */}
      <div className="container">
        {" "}
        <h1 className="items-start text-4xl my-5">
          {aggregation.tree.categories[0].name}
        </h1>
      </div>
      <div className="container h-[450px] bg-slate-50 my-4 flex justify-center items-center">
        <div className="h-[450px] w-screen">
          <Carousel indicators={false}>
            {list.map((item, i) => (
              <Image
                key={i}
                src={item.images.main[0].url}
                alt=""
                width={1000}
                height={1000}
                quality={100}
              />
            ))}
          </Carousel>
        </div>
      </div>
      {/* ! Banner */}
    </>
  );
};

export default Banner;
