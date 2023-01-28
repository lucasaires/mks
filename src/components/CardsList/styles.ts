import styled, { keyframes } from "styled-components";

export const Container = styled.main`
  max-height: 601px;
  height: 100%;
  max-width: 938px;
  width: 100%;
  border-radius: 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
  margin: 116px auto;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    margin: 16px auto;
  }
`;
const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const Skeleton = styled.div`
  max-height: 601px;
  height: 100%;
  max-width: 938px;
  width: 100%;
  border-radius: 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
  margin: 116px auto;
  animation: ${skeletonKeyframes} 1300ms ease-in-out infinite;
  background-color: #eee;
  background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
`;

export const ContainerFooter = styled.footer`
  display: none;
  @media (max-width: 767px) {
    display: flex;
    background-color: #eeeeee;
    height: 34px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
  }
`;
