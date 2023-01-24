// import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

import logo from "../../assets/logo.svg";
import { Container, Cart, Content } from "./styles";
// import { useCart } from "../../hooks/useCart";

const Header = (): JSX.Element => {
  //   const { cart } = useCart();
  const cartSize = 5;

  return (
    <Container>
      <Content>
        <div>
          <img src={logo} alt="Mks sistemas" />
          <h6>Sistemas</h6>
        </div>

        <Cart href="#">
          <div>
            <BsCart4 size={18} />
            {cartSize}
          </div>
        </Cart>
      </Content>
    </Container>
  );
};

export default Header;
