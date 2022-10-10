import "./checkout-item.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { addQuantityToCheckout,substractQuantityToCheckout,removeProductfromCheckout } = useContext(CartContext);
  const addOneToCheckout = () => addQuantityToCheckout(cartItem);
  const substractOneToCheckout = ()=> substractQuantityToCheckout(cartItem)
  const removeOneProduct=()=>removeProductfromCheckout(cartItem)
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
      {quantity > 1 ? (
        <FontAwesomeIcon
          className="arrow"
          icon={faChevronLeft}
          onClick={substractOneToCheckout}
        />):(<FontAwesomeIcon
          icon={faChevronLeft}
          className="disabled"
          />)}

        <span className="value">{quantity}</span>
        <FontAwesomeIcon className="arrow" icon={faChevronRight} onClick={addOneToCheckout} />
      </span>

      <span className="price">${price}</span>
      <FontAwesomeIcon className="remove-button" icon={faRemove} onClick={removeOneProduct} />
      <hr />
    </div>
  );
};
export default CheckoutItem;
