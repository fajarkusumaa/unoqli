/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";

import { useCartStore } from "@/components/utils/cartStore";
import { Tops } from "../../components/utils/api/men/Tops";

import Layout from "../../components/Layout";

import Head from "next/head";

import Article from "../../components/Article";
import Banner from "../../components/Banner";
import Filter from "../../components/Filter";

// import { productAll } from "../../components/utils/api/product/product";
import axios from "axios";

const product = () => {
  const allPokeUrl = "https://pokeapi.co/api/v2/pokemon";
  const [pokename, setPokename] = useState("ditto");
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokename}`;

  const [allPoke, setAllPoke] = useState();
  const [poke, setPoke] = useState();

  console.log(pokename);
  console.log(allPoke);
  console.log(poke);

  const fetchAllPoke = async () => {
    try {
      const response = await axios.get(allPokeUrl);
      setAllPoke(response.data.results);
    } catch (error) {
      console.error("error fetching data", error);
    }
  };
  const fetchPoke = async () => {
    try {
      const response = await axios.get(apiUrl);
      setPoke(response.data);
    } catch (error) {
      console.error("error fetching data", error);
    }
  };

  useEffect(() => {
    fetchAllPoke();
    fetchPoke();
  }, [pokename, apiUrl]);

  if (!allPoke) {
    return (
      <>
        <Head>{/* <title>{aggregation.tree.categories.name}</title> */}</Head>
        <div className="flex justify-center h-screen w-screen items-center">
          <h1>No Pokemon</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Pokemon</title>
      </Head>

      <div className="flex">
        <div className="w-1/2 bg-slate-50">
          <h1>Poke Detail</h1>

          <div className="flex flex-col">
            {poke && (
              <>
                <p>{poke.name}</p>
              </>
            )}
          </div>
        </div>{" "}
        <div className="w-1/2 bg-slate-400 ">
          <h1>pokemon list</h1>
          <div className="flex-wrap flex gap-3">
            {allPoke.map((data, i) => (
              <button
                onClick={() => setPokename(data.name)}
                className="p-2 bg-slate-800 text-white"
              >
                {data.name}
              </button>
            ))}
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default product;
