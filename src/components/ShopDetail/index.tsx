import { useState, useEffect } from 'react';
import { useShopListContext } from "../../hooks/useOpenCart";
import { Container, Content, MainScrool, Box, TotalPrice, CardAmount, CardName, ShowPrice, Price, ContainerPrice, ShowMobile, MobileUpdate, CloseContainer, CloseContent } from "./styles";
import close from '../../assets/close.svg'
import closeCard from '../../assets/closeCard.svg'
import { incrementAmount, decrementAmount, removeProduct } from "../../redux/productsList/productListSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelectort";
import { convertToRealWithInsignia } from "../utils/convertToReal";


const ShopDetail = (): JSX.Element => {
    const { toggleOpen } = useShopListContext();
    const [width, setWidth] = useState<Number>(window.innerWidth);

    const dispatch = useAppDispatch();

    const list = useAppSelector(state => state.productList)


    useEffect(() => {
        setWidth(window.innerWidth)
    }, [window.innerWidth])


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
                                        <CloseContainer className="teste">
                                            <CloseContent className="1">
                                                <img src={width > 768 ? close : closeCard} alt="Excluir" onClick={() => dispatch(removeProduct(item))} />
                                            </CloseContent>
                                        </CloseContainer>

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
                                            <div>
                                                <div> <button onClick={() => dispatch(incrementAmount(item))}> <strong> + </strong> </button> </div>
                                            </div>
                                        </CardAmount>
                                        <ShowPrice>
                                            <p>{convertToRealWithInsignia(item.product.price)}</p>
                                        </ShowPrice>
                                        <ShowMobile>
                                            <ContainerPrice>
                                                <MobileUpdate>
                                                    <div> <button disabled={item.amount <= 1} onClick={() => dispatch(decrementAmount(item))}> <strong> - </strong> </button> </div>
                                                    <div> | </div>
                                                    <div> {item.amount} </div>
                                                    <div> | </div>
                                                    <div>
                                                        <div> <button onClick={() => dispatch(incrementAmount(item))}> <strong> + </strong> </button> </div>

                                                    </div>
                                                </MobileUpdate>
                                                <Price> <p>R${(item.product.price)}</p></Price>

                                            </ContainerPrice>
                                        </ShowMobile>
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
