import "./checkout.styles.scss";
import { Fragment, useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
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
    <div className="checkout-container">
      <div className="checkout-header">
        {header.map((ele) => (
          
            <span className="header-block">{ele.name}</span>
        ))}

        <hr />
      </div>

      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      {totalCheckout ? (
        <div className="total">
          <span>Total: ${totalCheckout}</span>
        </div>
      ) : (
        <Fragment></Fragment>
      )}
    </div>
  );
};
export default Checkout;
