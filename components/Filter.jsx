import { Accordion, Label, Button, Checkbox } from "flowbite-react";
import React from "react";
import { FormatterPrice } from "./utils/FormatterPrice";

import { allMenu } from "./utils/api/allMenu";
import { useState } from "react";
import { useEffect } from "react";

const Filter = ({ aggregation, setUrl }) => {
  const [Menu, setMenu] = useState([]);

  const getMenu = allMenu.result.menu[0].children[0].items;
  const menuLabel = getMenu.map((menu) => menu.label.toUpperCase());
  const menuContent = getMenu.map((menu) => menu.content[0]);
  console.log(menuContent);

  useEffect(() => {
    setMenu(getMenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Menu.children[0].items.map(res);

  return (
    <>
      <Accordion collapseAll flush className="border-transparent ">
        <Accordion.Panel>
          <Accordion.Title>Categories</Accordion.Title>
          <Accordion.Content>
            {menuLabel.map((menu, i) => {
              return menu === aggregation.tree.genders[0].name ? (
                <>
                  {menuContent[i].children.map((text, i) => {
                    return (
                      <Accordion collapseAll flush key={i}>
                        <Accordion.Panel>
                          <Accordion.Title>{text.headingText}</Accordion.Title>
                          <Accordion.Content>
                            {text.children[0].children.map((submenu, i) => {
                              return (
                                <div key={i}>
                                  {" "}
                                  <button
                                    onClick={() => setUrl(submenu.url)}
                                    href=""
                                    className="p-4 block hover:font-bold duration-150 ease-in-out"
                                  >
                                    {submenu.label}
                                  </button>
                                </div>
                              );
                            })}
                          </Accordion.Content>
                        </Accordion.Panel>
                      </Accordion>
                    );
                  })}
                </>
              ) : null;
            })}
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
                <div key={i} className="flex w-full items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm text-gray-500">
                    {FormatterPrice(price.from)}{" "}
                    {price.to === 0 ? null : <>- {FormatterPrice(price.to)}</>}
                  </Label>
                </div>
              ))}
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="border-0">Criteria</Accordion.Title>
          <Accordion.Content>
            <div className="flex flex-wrap-reverse gap-3">
              {aggregation.flags.map((item, i) => (
                <div key={i} className="flex-grow">
                  <label className="checkbox-wrapper cursor-pointer ">
                    <input
                      type="checkbox"
                      className="checkbox-input peer hidden"
                    />
                    <p className="checkbox-tile peer-checked:border-blue-600 border-2 border-gray-150 duration-200 ease-in-out p-2 text-sm text-gray-500 peer-checked:text-gray-700   text-center">
                      <span className="checkbox-label">{item.name}</span>
                    </p>
                  </label>
                </div>
              ))}
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  );
};

export default Filter;
