import { Container, Cart, Content } from "./styles";
// import { useCart } from "../../hooks/useCart";

const Card = (): JSX.Element => {
  //   const { cart } = useCart();
  const cartSize = 5;

  return (
    <Container>
      <Content>
        <img src={"#"} alt="" />

        <header>
          {" "}
          title
          <div>R$ 399</div>
        </header>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          doloribus expedita quae quidem dolores
        </span>
      </Content>

      <button>
        <span>comprar</span>
      </button>
    </Container>
  );
};

export default Card;
