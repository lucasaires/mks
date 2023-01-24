import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  background-color: ${(props) => props.theme["blue-500"]};
  a {
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.7;
    }
  }
  padding: 28px 0px 28px 65px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: row;

    h6 {
      font-size: 16px;
      font-weight: 300;
      display: flex;
      flex-direction: column-reverse;
      padding-left: 5px;
      color: ${(props) => props.theme["white"]};
    }
  }
`;

export const Cart = styled.a`
  padding-right: 88px;
  display: flex;
  align-items: center;
  text-decoration: none;
  div {
    background-color: ${(props) => props.theme["white"]};
    width: 90px;
    height: 45px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
    color: ${(props) => props.theme["black-900"]};

    svg {
    }
  }
`;
