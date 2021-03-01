/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiPlusCircle } from 'react-icons/fi';
import Select from 'react-select';

import { Title, Container, Main, InputGroup, ErrorMessage } from './styles';
import api from '../../services/api';

interface NewRoomFormData {
  name: string;
  type: string;
  capacity: number;
}

interface ErrorObject {
  status: string;
  message: string;
}

const NewRoom: React.FC = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('event');
  const [capacity, setCapacity] = useState(0);
  const [errorMessage, setErrorMessage] = useState<ErrorObject | null>(null);
  const history = useHistory();

  const handleSubmit = (): void => {
    const room: NewRoomFormData = { name, type, capacity };

    api
      .post('/room', room)
      .then((response) => {
        history.push('/rooms');
      })
      .catch((error) => {
        setErrorMessage(error.response.data);
      });
  };

  useEffect(() => {
    console.log('log', errorMessage);
  }, [errorMessage]);

  return (
    <Container>
      <Title>Go Dev</Title>
      <Link to="/rooms" style={{ marginBottom: 60 }}>
        <FiArrowLeft size={64} color="#ff9000" />
      </Link>
      <Main>
        <InputGroup>
          <label htmlFor=""> Nome </label>
          <input
            type="text"
            onChange={(event) => setName(event.target.value)}
            placeholder="Nome da Sala"
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor=""> Lotação </label>
          <input
            type="number"
            onChange={(event) => setCapacity(Number(event.target.value))}
            placeholder="Capacidade da Sala"
            min={0}
            max={999}
            value={capacity}
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor=""> Tipo </label>
          <select
            defaultValue={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option value="event">Evento</option>
            <option value="coffe">Café</option>
          </select>
        </InputGroup>
      </Main>
      {!!errorMessage && <ErrorMessage>{errorMessage.message}</ErrorMessage>}
      <button type="button" onClick={() => handleSubmit()}>
        Criar Nova Sala
      </button>
    </Container>
  );
};

export default NewRoom;
