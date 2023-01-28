import { useShopListContext } from "../../hooks/useOpenCart";
import { Container, Content, MainScrool, Box, TotalPrice, CardAmount, CardName } from "./styles";
import close from '../../assets/close.svg'
import { incrementAmount, decrementAmount } from "../../redux/productsList/productListSlice"
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelectort";
import { convertToRealWithInsignia } from "../utils/convertToReal";


const ShopDetail = (): JSX.Element => {
    const { toggleOpen } = useShopListContext();
    const dispatch = useAppDispatch();

    const list = useAppSelector(state => state.productList)

    return (
        <Container>
            <div className="teste">
                <Content>
                    <header>
                        <h1>Carrinho de Compras</h1>
                        <div>
                            <figure>
                                <img src={close} alt="Fechar Carrinho" onClick={toggleOpen} />
                            </figure>
                        </div>
                    </header>

                    <main>
                        <MainScrool amountItem={list?.length || 0}>
                            <ul >
                                {list.length > 0 && list.map((item, index) => (
                                    <li key={index}>
                                        <div>
                                            <figure>
                                                <img src={item.product.photo} alt={item.product.name} />
                                            </figure>
                                        </div>
                                        <CardName><p>{item.product.name}</p></CardName>
                                        <CardAmount>

                                            <div> <button disabled={item.amount <= 1} onClick={() => dispatch(decrementAmount(item))}> <strong> - </strong> </button> </div>
                                            <div> | </div>
                                            <div> {item.amount} </div>
                                            <div> | </div>

                                            <div> <button onClick={() => dispatch(incrementAmount(item))}> <strong> + </strong> </button> </div>
                                        </CardAmount>
                                        <p>{convertToRealWithInsignia(item.product.price)}</p>
                                    </li>
                                ))}

                            </ul>
                        </MainScrool>
                    </main>
                    <footer>
                        <div >
                            <TotalPrice>
                                <h2>
                                    Total:
                                </h2>

                                <h2>
                                    {convertToRealWithInsignia(list.reduce((total, item) => total + (item.product.price * item.amount), 0))}
                                </h2>

                            </TotalPrice>
                        </div>
                        <button>
                            FINALIZAR
                        </button>
                    </footer>
                </Content>
            </div>
        </Container>
    )
}
export default ShopDetail;
