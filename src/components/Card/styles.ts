import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  justify-content: end;

  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0px;

    img {
      height: 138px;
      width: auto;
    }
  }

  header {
    display: flex;
    width: 100%;
    align-items: center;

    h2 {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      padding-right: 10px;

      width: 80%;
    }

    div {
      background: #373737;
      border-radius: 5px;
      color: #fff;
      width: 90px;
      height: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 700;
      font-size: 15px;
      line-height: 15px;
    }
  }

  button {
    background: #0f52ba;
    border-radius: 0px 0px 8px 8px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #fff;
    border: none;
    height: 32px;
    cursor: pointer;

    transition: opacity 0.2s;
    &:hover {
      opacity: 0.7;
    }

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    svg{
      margin-right: 10px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 0 16px 0;
  margin: 5px 0px 10px 0px;
  span {
    font-size: 10px;
    font-weight: 300;
    line-height: 12px;
    letter-spacing: 0px;
    text-align: left;
    display: flex;

    width: 80%;

    padding: 5px 0px;
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
