import { Accordion, Label, Button, Checkbox } from "flowbite-react";
import React from "react";
import { FormatterPrice } from "./utils/FormatterPrice";

import { allMenu } from "./utils/api/allMenu";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";

const Filter = ({ aggregation }) => {
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
      <Accordion collapseAll flush className="border-transparent">
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
                                <ul key={i}>
                                  {" "}
                                  <Link
                                    href=""
                                    className="p-4 block hover:bg-slate-200 duration-150 ease-in-out"
                                  >
                                    {submenu.label}
                                  </Link>
                                </ul>
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
