import Head from "next/head";
import React from "react";

const Tops = () => {
  return (
    <>
      <Head>
        <title>Tops Collection</title>
      </Head>
      <section className="flex gap-4 h-2/3 bg-gray-100">
        <div className="p-36 justify-content-center self-center flex flex-col flex-1 w-1/2">
          <h1>ini Tops Collection</h1>
        </div>
      </section>
    </>
  );
};

export default Tops;
