import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CheckoutItemContainer,
  ImageContainer,
  Img,
  Name,
  Quantity,
  Price,
  Arrow,
  Disabled,
  Value,
  RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const {
    addQuantityToCheckout,
    substractQuantityToCheckout,
    removeProductfromCheckout,
  } = useContext(CartContext);
  const addOneToCheckout = () => addQuantityToCheckout(cartItem);
  const substractOneToCheckout = () => substractQuantityToCheckout(cartItem);
  const removeOneProduct = () => removeProductfromCheckout(cartItem);
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        {quantity > 1 ? (
          <Arrow
            icon={faChevronLeft}
            onClick={substractOneToCheckout}
          />
        ) : (
          <Disabled icon={faChevronLeft} className="disabled" />
        )}

        <Value>{quantity}</Value>
        <Arrow
          className="arrow"
          icon={faChevronRight}
          onClick={addOneToCheckout}
        />
      </Quantity>

      <Price>${price}</Price>
      <RemoveButton
        icon={faRemove}
        onClick={removeOneProduct}
      />
      <hr />
    </CheckoutItemContainer>
  );
};
export default CheckoutItem;
