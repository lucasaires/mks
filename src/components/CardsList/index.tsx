import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../@types/types";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelectort";
import { getProducts } from "../../redux/products/productSlice";
import Card from "../Card";
import { convertToReal } from "../utils/convertToReal";
import { Container, Skeleton, ContainerFooter } from "./styles";




const CardList = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const { data, error, loading } = useAppSelector(state => state.product)

  useEffect(() => {
    dispatch(getProducts())

  }, [dispatch]);


  return (
    <>
      {
        loading ? (
          <Skeleton />
        ) : (
          <>
            <Container>
              {data?.map((product: Product) => (
                <Card key={product.id}
                  id={product.id}
                  brand={product.brand}
                  description={product.description}
                  name={product.name}
                  photo={product.photo}
                  price={convertToReal(product.price)}
                />
              ))}
              <ContainerFooter>
                MKS Sistemas © Todos os direitos reservados
              </ContainerFooter>
            </Container>

          </>
        )
      }

    </>
  );
};

export default CardList;
