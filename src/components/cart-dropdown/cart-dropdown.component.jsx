<<<<<<< HEAD
=======
import "./cart-dropdown.styles.scss";
>>>>>>> ebc06ffc2ed5831344d39267163f483f10bf5046
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
<<<<<<< HEAD
import { CartDropdownContainer,CartItems } from "./cart-dropdown.styles";

=======
>>>>>>> ebc06ffc2ed5831344d39267163f483f10bf5046
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();
  
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
<<<<<<< HEAD
    <CartDropdownContainer>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
=======
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
>>>>>>> ebc06ffc2ed5831344d39267163f483f10bf5046
  );
};
export default CartDropdown;
