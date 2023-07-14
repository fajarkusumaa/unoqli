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
      <Accordion collapseAll flush className="border-transparent text-sm">
        <Accordion.Panel>
          <Accordion.Title className="py-4">Categories</Accordion.Title>
          <Accordion.Content>
            {menuLabel.map((menu, i) => {
              return menu === aggregation.tree.genders[0].name ? (
                <>
                  {menuContent[i].children.map((text, i) => {
                    return (
                      <Accordion collapseAll flush key={i}>
                        <Accordion.Panel>
                          <Accordion.Title className="py-4">
                            {text.headingText}
                          </Accordion.Title>
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
          <Accordion.Title className="py-4">Size</Accordion.Title>
          <Accordion.Content>
            <div className="flex flex-wrap gap-4">
              {aggregation.sizes.map((size, i) => (
                <div key={i} className="flex items-center ">
                  <input
                    type="checkbox"
                    id={i}
                    value=""
                    className="peer focus:ring-rose-200 text-rose-600"
                    required=""
                  />
                  <Label className="flex p-4" for={i}>
                    <p>{size.name}</p>
                  </Label>
                </div>
              ))}
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="py-4">Price</Accordion.Title>
          <Accordion.Content>
            <div className="flex flex-wrap gap-4">
              {aggregation.prices.map((price, i) => (
                <div key={i} className="flex w-full items-center gap-2">
                  <Checkbox
                    id={i}
                    className="peer focus:ring-rose-200 text-rose-600"
                  />
                  <Label flush htmlFor={i} className="text-sm text-gray-500">
                    {FormatterPrice(price.from)}{" "}
                    {price.to === 0 ? null : <>- {FormatterPrice(price.to)}</>}
                  </Label>
                </div>
              ))}
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="py-4">Criteria</Accordion.Title>
          <Accordion.Content>
            <div className="flex flex-wrap-reverse gap-3 ">
              {aggregation.flags.map((item, i) => (
                <label
                  key={i}
                  className="checkbox-wrapper cursor-pointer flex-grow"
                >
                  <input
                    type="checkbox"
                    className="checkbox-input peer hidden"
                  />
                  <p className="checkbox-tile peer-checked:border-rose-600 border-2 border-gray-150 duration-200 ease-in-out p-2 text-sm text-gray-500 peer-checked:text-gray-700   text-center">
                    <span className="checkbox-label">{item.name}</span>
                  </p>
                </label>
              ))}
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  );
};

export default Filter;
