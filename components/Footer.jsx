import React from "react";

const Footer = () => {
  return (
    <div className="flex h-fit justify-center bg-gray-100 items-center w-screen px-36 py-24 text-gray-500">
      <div className="w-full h-fit flex gap-12">
        <div className="w-1/3 h-fit ">
          <h4 className="mb-4 text-lg font-semibold text-gray-800">
            About Unoqli
          </h4>
          <div className="flex flex-col gap-2">
            <p>Information </p>
            <p>Store Locator</p>
            <p>Bulk Purchase</p>
            <p>Alteration Service</p>
            <p>Gift Delivery Service</p>
            <p>Live Station</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
