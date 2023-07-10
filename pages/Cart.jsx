import React from "react";

import { X, Trash2 } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "../components/utils/cartStore";
import { FormatterPrice } from "../components/utils/FormatterPrice";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const price = cart.reduce(
    (result, item) => parseInt(item.prices.base.value, 10),
    0
  );

  const handleRemoveFromCart = (index) => {
    removeFromCart(index);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + parseInt(item.prices.base.value, 10),
    0
  );

  return (
    <div>
      {cart.map((item, index) => (
        <div key={index} className="shop-item flex gap-4">
          <div>
            <img width={128} src={item.images.main[0].url} alt="" />
          </div>
          <div className="flex flex-1 flex-col">
            <span className="text-lg font-semibold">{item.name} </span>
            <p className="text-base opacity-50">Size: {item.sizes[1].name}</p>

            <p className="text-base opacity-50">Qty:</p>
            <p className="mt-auto font-semibold">
              {FormatterPrice(totalPrice)}
            </p>
          </div>
          <button
            onClick={() => handleRemoveFromCart(index)}
            className="self-start"
          >
            <Trash2 className="text-rose-500" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
