import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  addToCart: (item) => {
    set((state) => ({ cart: [...state.cart, item] }));
  },
  removeFromCart: (index) => {
    set((state) => ({
      cart: state.cart.filter((_, i) => i !== index),
    }));
  },
  clearCart: () => {
    set({ cart: [] });
  },
}));
