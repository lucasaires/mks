import styled from "styled-components";

export const Container = styled.header`
  background-color: ${(props) => props.theme["blue-500"]};
  padding: 28px 0px 28px 65px;

  a {
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 767px) {
    padding: 11px 0px 11px 20px;
  }
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
      color: ${(props) => props.theme["white"]};
      font-size: 16px;
      font-weight: 300;
      display: flex;
      flex-direction: column-reverse;
      padding-left: 5px;

      @media (max-width: 767px) {
        margin-bottom: 3px;
      }
    }
  }
`;

export const Cart = styled.a`
  padding-right: 88px;
  display: flex;
  align-items: center;
  text-decoration: none;

  @media (max-width: 767px) {
    padding-right: 23px;
    font-size: 10px;
  }

  div {
    @media (max-width: 767px) {
      width: 52px;
      height: 26px;
      font-weight: 700;
      font-size: 12px;
    }

    background-color: ${(props) => props.theme["white"]};
    width: 90px;
    height: 45px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
    color: ${(props) => props.theme["black-900"]};
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;

    svg {
      font-weight: bold;
      color: black;
      @media (max-width: 767px) {
        width: 13px;
      }
    }
  }
`;
