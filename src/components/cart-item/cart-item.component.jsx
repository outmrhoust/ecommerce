import { CartItemsContainer, ItemsDetails} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemsContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemsDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemsDetails>
    </CartItemsContainer>
  );
};
export default CartItem;
