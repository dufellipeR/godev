import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 0.5fr;
  align-items: center;
  margin-top: 5px;
`;

export const Main = styled.main``;

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

  margin-bottom: 100px;
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Desc = styled.div``;

export const Button = styled(Link)`
  display: flex;
  justify-content: space-evenly;
  text-decoration: none;
  color: black;
  background-color: #ff9000;
  border: 0;
  border-radius: 12px;
  padding: 15px;
  transform: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#ff9000')};
  }
`;

export const HeadList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  ul {
    list-style: none;
    text-decoration: none;
    color: #000;
    margin-bottom: 15px;
    list-style: none;
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    background-color: #f6f8fa;
    border-radius: 12px;
    padding: 12px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  a {
    list-style: none;
    text-decoration: none;
    color: #000;
    margin-bottom: 15px;
    ul {
      list-style: none;
      display: grid;
      grid-template-columns: 2fr 2fr 1fr;
      background-color: #ff9000;
      border-radius: 12px;
      padding: 12px;
      transition: transform 0.2s;
      &:hover {
        transform: translateX(10px);
      }
    }
  }
`;

const appearFromLeft = keyframes`
 from {
  opacity: 0;
  transform: translateX(-100px);
 }
 to {
  opacity:1;
  transform: translateX(0)
 }
`;
const appearFromRight = keyframes`
 from {
  opacity: 0;
  transform: translateX(100px);
 }
 to {
  opacity:1;
  transform: translateX(0)
 }
`;

export const AnimationContainer = styled.div`
  animation: ${appearFromRight} 0.5s;
`;
