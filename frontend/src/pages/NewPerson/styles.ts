import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 0.5fr;
  align-items: center;
  margin-top: 5px;

  button {
    background-color: #ff9000;
    border: 0;
    border-radius: 12px;
    padding: 12px;
  }
`;

export const Title = styled.h1`
  font-size: 64px;
  color: #ff9000;
  max-width: 500px;
  line-height: 56px;

  margin-bottom: 40px;
`;

export const Main = styled.main`
  display: grid;
  grid-template-rows: 1fr 1fr 2fr;
  grid-row-gap: 10px;
  justify-content: space-evenly;

  input {
    padding: 5px;
  }

  select {
    padding: 5px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled.span`
  color: #f0cab1;
  background-color: #e83b44;
  text-align: center;
  border-radius: 12px;
  margin-bottom: 10px;
`;
