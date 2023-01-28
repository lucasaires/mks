import { BsCart4 } from "react-icons/bs";
import { useShopListContext } from "../../hooks/useOpenCart";
import { Container, Cart, Content } from "./styles";
import logo from "../../assets/logo.svg";
import ShopDetail from "../ShopDetail";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelectort";
import { useEffect, useState } from "react";

const Header = (): JSX.Element => {
  const { open, toggleOpen } = useShopListContext();
  const dispatch = useAppDispatch();

  const [cart, setCart] = useState<Number>(0);

  const list = useAppSelector(state => state.productList)

  function handleAmount() {
    let aux = 0;
    list.forEach(item => {
      aux += item.amount;
    })
    setCart(aux);
  }

  useEffect(() => {
    handleAmount();
  }, [list])
  return (
    <>
      <Container>
        <Content>
          <div>
            <img src={logo} alt="Mks sistemas" />
            <h6>Sistemas</h6>
          </div>

          <Cart href="#">
            <div onClick={toggleOpen}>
              <BsCart4 size={18} />
              {cart}
            </div>
          </Cart>
        </Content>
      </Container>

      {open && <ShopDetail />}

    </>
  );
};

export default Header;
