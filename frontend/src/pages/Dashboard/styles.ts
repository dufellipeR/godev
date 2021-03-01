import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-top: 80px;
`;

export const Main = styled.main`
  a {
    text-decoration: none;
    border: 0;
    padding: 1%;
    padding-right: 5%;
    padding-left: 5%;
    color: white;
    border-radius: 12px;
    font-size: 26px;
    background-color: #6b0f1a;
    background-image: linear-gradient(315deg, #6b0f1a 0%, #b91372 74%);
    transform: background-color ease 0.2;
  }
`;

export const Image = styled.div`
  img {
    width: 500px;
    height: auto;
  }
`;

export const Title = styled.h1`
  font-size: 64px;
  color: #ff9000;
  max-width: 500px;
  line-height: 56px;

  margin-top: 80px;
  margin-bottom: 100px;
`;
