import { Accordion, Label, Checkbox, Button } from "flowbite-react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { productList } from "../components/utils/productList";

const Filter = () => {
  const callAggregation = productList.result.aggregations;
  const [aggregation, setAggregation] = useState();
  console.log(aggregation);

  useEffect(() => {
    setAggregation(callAggregation);
  }, []);

  return (
    <>
      <Accordion collapseAll flush className="border-transparent">
        <Accordion.Panel>
          <Accordion.Title>Categories</Accordion.Title>
          <Accordion.Content>
            <ul>
              {aggregation.tree.subcategories.map((subs, i) => (
                <li key={i} className="p-4 hover:bg-slate-50">
                  <a href="">{subs.name}</a>
                </li>
              ))}
            </ul>{" "}
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="border-0">Size</Accordion.Title>
          <Accordion.Content>
            <div className="flex flex-wrap gap-4">
              {aggregation.sizes.map((size, i) => (
                <div key={i} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="react-option"
                    value=""
                    class="peer"
                    required=""
                  />
                  <Label
                    className="flex p-4 cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    for="react-option"
                  >
                    <p>{size.name}</p>
                  </Label>
                </div>
              ))}
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="border-0">Price</Accordion.Title>
          <Accordion.Content>
            <div className="flex flex-wrap gap-4">
              {aggregation.prices.map((price, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">
                    {FormatterPrice(price.from)}{" "}
                    {FormatterPrice(price.to) === 0 ? null : (
                      <>- {FormatterPrice(price.to)}</>
                    )}
                  </Label>
                </div>
              ))}
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="border-0">Rating</Accordion.Title>
          <Accordion.Content>
            <div className="flex flex-wrap gap-4">
              <Button
                flush
                className="border-2 border-slate-50 bg-transparent text-slate-700 hover:text-white hover:bg-slate-700 flex-1 w"
              >
                wkw
              </Button>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  );
};

export default Filter;
