import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Title, Container, Main, InputGroup, ErrorMessage } from './styles';
import api from '../../services/api';

interface NewPersonFormData {
  name: string;
  last_name: string;
}

interface ErrorObject {
  status: string;
  message: string;
}

const NewPerson: React.FC = () => {
  const [name, setName] = useState('');
  const [last_name, setLast_name] = useState('');
  const [errorMessage, setErrorMessage] = useState<ErrorObject | null>(null);
  const history = useHistory();

  const handleSubmit = (): void => {
    const person: NewPersonFormData = { name, last_name };

    api
      .post('/person', person)
      .then((response) => {
        history.push('/people');
      })
      .catch((error) => {
        setErrorMessage(error.response.data);
      });
  };

  return (
    <Container>
      <Title>Go Dev</Title>
      <Link to="/people" style={{ marginBottom: 60 }}>
        <FiArrowLeft size={64} color="#ff9000" />
      </Link>
      <Main>
        <InputGroup>
          <label htmlFor=""> Nome </label>
          <input
            type="text"
            onChange={(event) => setName(event.target.value)}
            placeholder="Nome da Pessoa"
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor=""> Sobrenome </label>
          <input
            type="text"
            onChange={(event) => setLast_name(event.target.value)}
            placeholder="Sobrenome da Pessoa"
            value={last_name}
          />
        </InputGroup>
      </Main>
      {!!errorMessage && <ErrorMessage>{errorMessage.message}</ErrorMessage>}
      <button type="button" onClick={() => handleSubmit()}>
        Criar Nova Sala
      </button>
    </Container>
  );
};

export default NewPerson;
