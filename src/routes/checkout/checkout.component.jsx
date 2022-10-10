import { Fragment, useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { CheckoutContainer, CheckoutHeader,HeaderBlock,Total } from "./checkout.styles";
const Checkout = () => {
  const { cartItems, totalCheckout } = useContext(CartContext);
  const header = [
    { id: 1, name: "Product" },
    { id: 2, name: "Description" },
    { id: 3, name: "Quantity" },
    { id: 4, name: "Price" },
    { id: 5, name: "Remove" },
  ];

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        {header.map((ele) => (
          
            <HeaderBlock key={ele.id}>{ele.name}</HeaderBlock>
        ))}

        <hr />
      </CheckoutHeader>

      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      {totalCheckout ? (
        <Total>
          <span>Total: ${totalCheckout}</span>
        </Total>
      ) : (
        <Fragment></Fragment>
      )}
    </CheckoutContainer>
  );
};
export default Checkout;
