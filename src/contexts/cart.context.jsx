import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const addQuantity = (item, cartItems) => {
  return cartItems.map((cartItem) =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};
const substractQuantity = (item, cartItems) => {
  return cartItems.map((cartItem) =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const removeItem = (item, cartItems) => {
  return cartItems.filter((cartItem) => cartItem.id !== item.id);
};


export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
  cartCount: 0,
  addQuantityToCheckout: () => {},
  substractQuantityToCheckout: () => {},
  removeProductfromCheckout: () => {},
  totalCheckout: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalCheckout, setTotatCheckout] = useState(0);
  useEffect(() => {
    const newCartCount = cartItems.reduce((accumulator, currentElement) => {
      return accumulator + currentElement.quantity;
    }, 0);
    setCartCount(newCartCount);
  }, [cartItems]);
  useEffect(() => {
    const newTotalCheckout = cartItems.reduce((accumulator, currentElement) => {
      return accumulator + currentElement.quantity * currentElement.price;
    }, 0);
    setTotatCheckout(newTotalCheckout);
  }, [cartItems]);

  const addItemsToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const addQuantityToCheckout = (item) => {
    setCartItems(addQuantity(item, cartItems));
  };
  const substractQuantityToCheckout = (item) => {
    setCartItems(substractQuantity(item, cartItems));
  };
  const removeProductfromCheckout = (item) => {
    setCartItems(removeItem(item, cartItems));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemsToCart,
    cartItems,
    cartCount,
    addQuantityToCheckout,
    substractQuantityToCheckout,
    removeProductfromCheckout,
    totalCheckout,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
