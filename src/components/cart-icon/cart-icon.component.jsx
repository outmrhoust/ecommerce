<<<<<<< HEAD
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import {CartIconContainer,ShoppingIcon,ItemCount} from "./cart-icon.styles";
=======
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
>>>>>>> ebc06ffc2ed5831344d39267163f483f10bf5046


const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  

  const toggleIsCartOpen = (event) => {
    event.preventDefault();
    setIsCartOpen(!isCartOpen);
  };
  return (
<<<<<<< HEAD
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
=======
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
>>>>>>> ebc06ffc2ed5831344d39267163f483f10bf5046
  );
};

export default CartIcon;
