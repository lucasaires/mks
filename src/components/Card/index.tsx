import { Container, Cart, Content } from "./styles";
import { FiShoppingBag } from "react-icons//fi";
import { Product } from "../../@types/types";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/productsList/productListSlice"


const Card = (product: Product): JSX.Element => {

  const dispatch = useDispatch();

  const handleAddList = (): void => {
    dispatch(addProduct({ id: product.id, product, amount: 1 }));

  }
  return (
    <Container>
      <figure>
        <img src={product.photo} alt="" />
      </ figure>
      <Content>
        <header>
          <h2>
            {product.name}
          </h2>
          <div>R${product.price}</div>
        </header>
        <span>
          {product.description}
        </span>
      </Content>
      <button onClick={handleAddList}>
        <FiShoppingBag />
        <span>
          COMPRAR</span>
      </button>
    </Container>
  );
};

export default Card;
