import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import React from "react";
import Image from "next/image";

const Banner = ({ list, aggregation }) => {
  // Randomize number of items
  const getRandomItems = (array, limit) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, limit);
  };

  const randomProducts = getRandomItems(list, 6);

  return (
    <>
      <div className="container">
        {" "}
        <h1 className="items-start text-4xl my-5">
          {aggregation.tree.categories[0].name}
        </h1>
      </div>
      <div className="container h-[600px] my-4 flex justify-center items-center">
        <div className="h-[600px] w-screen relative overflow-hidden flex gap-4">
          <>
            <div className="w-1/3 h-1/3 absolute bg-gradient-to-t from-gray-800 to-gray-800"></div>
            <div className="w-1/3 absolute bg-gray-800 h-full"></div>
            <div className="w-full h-full right-0">
              <Carousel
                autoPlay
                axis="vertical"
                interval={4000}
                transitionTime={800}
                showThumbs={false}
                showIndicators={false}
                showArrows={false}
                showStatus={false}
              >
                {randomProducts.map((item, i) => (
                  <>
                    <div className="flex h-[600px] w-full gap-4">
                      <div className="w-1/3 p-16 flex items-end  text-white">
                        <div className="flex-col items-start text-start">
                          <h3 className="text-3xl text-left">{item.name}</h3>
                          <p
                            className="text-base text-left mt-2 opacity-70"
                            dangerouslySetInnerHTML={{
                              __html: item.shortDescription,
                            }}
                          ></p>
                          <button className="py-4 px-8 bg-white text-gray-700 mt-4">
                            Explore More
                          </button>
                        </div>
                      </div>
                      <div className="w-2/3 aspect-square overflow-hidden">
                        <Image
                          src={item.images.main[0].url}
                          alt=""
                          height={500}
                          width={500}
                          // style={{ backgroundSize: "cover" }}
                          quality={100}
                        />
                      </div>
                    </div>
                  </>
                ))}
              </Carousel>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Banner;
