import styled from "styled-components";

interface PropsItem {
  amountItem: Number;
}

export const Container = styled.nav`
  background-color: ${(props) => props.theme["blue-500"]};
  width: 100%;
  transition: transform 0.3s ease-in-out;
  max-width: 486px;
  position: absolute;
  right: 0;
  top: 0;
  max-height: 1202px;
  height: 100%;
  position: fixed;
  z-index: 1;

  :first div {
    height: 100%;
  }
  @media (max-width: 767px) {
    width: 80%;
  }
`;

export const Content = styled.div`
  padding: 36px 22px 42px 47px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      cursor: pointer;
      transition: opacity 0.2s;
      &:hover {
        opacity: 0.7;
      }
    }
  }

  h1 {
    width: 40%;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 33px;
    color: ${(props) => props.theme["white"]};
  }
  div {
  }

  main {
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: block;

    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-height: 165px;
    }
  }
  li {
    background-color: ${(props) => props.theme["white"]};
    width: 100%;
    max-width: 379px;
    height: 95px;
    color: #000;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;

    :first-child {
      margin-top: 28px;
    }

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 28px;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    div {
      figure {
        img {
          width: 100%;
          height: 100%;
          max-width: 57px;
          max-height: 46px;
        }
      }
    }

    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 28px;
      width: 100%;
      max-width: 220px;
      height: 100%;
      max-height: 250px;
      padding-bottom: 5px;

      div {
        figure {
          img {
            width: 100%;
            height: 100%;
            max-width: 80px;
            max-height: 95px;
          }
        }
      }
    }
  }

  footer {
    position: absolute;
    color: ${(props) => props.theme["white"]};
    bottom: 0;
    left: 0;
    max-width: 486px;
    width: 100%;
    button {
      background-color: ${(props) => props.theme["black-900"]};
      color: ${(props) => props.theme["white"]};
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 97px;
      cursor: pointer;
      font-weight: 700;
      font-size: 28px;
      line-height: 15px;
      transition: opacity 0.2s;
      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

export const MainScrool = styled.div<PropsItem>`
  display: block;

  @media (min-width: 320px) {
    max-height: 380px;
    height: 100%;
    overflow-y: scroll;
  }

  @media (min-width: 767px) {
    max-height: 273px;
    height: 100%;
    overflow-y: scroll;
  }

  @media (min-width: 1024px) {
    max-height: 273px;
    height: 100%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 10px;
      border: 10px solid #6f97d5;
      display: ${(props) => (props.amountItem >= 3 ? "block" : "none")};
    }
  }

  @media (min-width: 1440px) {
    max-height: 500px;
    &::-webkit-scrollbar {
      width: 10px;
      border: 10px solid #6f97d5;
      display: ${(props) => (props.amountItem >= 5 ? "block" : "none")};
    }
  }
`;

export const Box = styled.div`
  justify-content: space-evenly !important;
  display: flex;
`;
export const TotalPrice = styled.div`
  padding: 0px 36px 50px;

  display: flex;
  justify-content: space-between;
`;

export const CardAmount = styled.div`
  height: 19px;
  width: 50px;
  border-radius: 4px;
  background: #ffffff;
  border: 0.3px solid #bfbfbf;

  font-weight: 400;
  font-size: 10px;

  display: flex;
  justify-content: space-evenly !important;
  align-items: center;

  div {
    button {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;

      transition: opacity 0.2s;
      &:hover {
        opacity: 0.7;
      }
    }
  }
  @media (max-width: 767px) {
    display: none !important;
  }
`;

export const CardName = styled.div`
  width: 20%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const ShowPrice = styled.div`
  @media (max-width: 767px) {
    display: none !important;
  }
`;

export const ContainerPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Price = styled.div`
  @media (max-width: 767px) {
    background: #373737;
    border-radius: 5px;
    color: #fff;
    width: 60px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
  }
`;

export const ShowMobile = styled.div`
  display: none !important;

  @media (max-width: 767px) {
    display: flex !important;
    flex-direction: row !important;
    justify-content: space-evenly !important;
  }
`;

export const MobileUpdate = styled.div`
  height: 19px;
  width: 50px;
  border-radius: 4px;
  background: #ffffff;
  border: 0.3px solid #bfbfbf;

  font-weight: 400;
  font-size: 10px;

  display: flex;
  justify-content: space-evenly !important;
  align-items: center;

  div {
    button {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;

      transition: opacity 0.2s;
      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

export const CloseContainer = styled.div`
  position: relative;
`;

export const CloseContent = styled.div`
  position: absolute;
  @media (max-width: 767px) {
    top: 5px;
    left: 80px;
  }
  top: -50px;
  left: 340px;
  img {
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.7;
    }
  }
`;
