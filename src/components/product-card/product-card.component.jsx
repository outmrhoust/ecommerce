import Button, { buttonTypesClasses } from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ProductCartContainer ,Footer, Name, Price} from "./product-card.styles";
const ProductCard = ({ product }) => {
  const { addItemsToCart } = useContext(CartContext);
  const addProductToCart = () => addItemsToCart(product);
  const { name, price, imageUrl } = product;
  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price className="price">{price}</Price>
      </Footer>
      <Button
        buttonType={buttonTypesClasses.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCartContainer>
  );
};
export default ProductCard;
