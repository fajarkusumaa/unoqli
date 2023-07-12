import { Carousel } from "flowbite-react";
import React from "react";

const Banner = ({ list, item }) => {
  return (
    <>
      {/* Banner */}
      <div className="container h-[450px] bg-slate-50 my-4 flex justify-center items-center">
        <div className="w-full h-full">
          <Carousel indicators={false}>
            {list.map((item, i) => (
              <div key={i}>
                <img
                  className="h-full aspect-square object-cover border-0"
                  src={item.images.main[0].url}
                  alt=""
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      {/* ! Banner */}
    </>
  );
};

export default Banner;
