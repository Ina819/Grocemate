import { styled } from "styled-components";

export const ContainerWithForm = styled.div`
  background: white;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 95%;
  height: 95%;
  padding-top: 55px;
  display: flex;
`;

export const LoginLeftPanel = styled.div`
  width: 50%;
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const PageContainer = styled.div`
  width: 50%;
  margin-top: 100px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

export const Container = styled.div`
  width: 80%;
  margin-top: 100px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;
