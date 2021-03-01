import React, { useEffect, useState } from 'react';
import { FiArrowLeft, FiPlusCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import teamProject from '../../assets/project_team.svg';
import api from '../../services/api';
import {
  Title,
  Container,
  Main,
  List,
  Button,
  Head,
  Desc,
  HeadList,
  AnimationContainer,
} from './styles';

interface IPerson {
  id: string;
  name: string;
  last_name: string;
}

const People: React.FC = () => {
  const [people, setPeople] = useState<IPerson[]>([]);

  useEffect(() => {
    api.get<IPerson[]>('/person').then((response) => {
      setPeople(response.data);
    });
  }, []);

  useEffect(() => {
    api.get('/balance');
  }, [people]);

  return (
    <Container>
      <AnimationContainer>
        <Title>Go Dev</Title>

        <Main>
          <Head>
            <Desc>
              <h2>Pessoas</h2>
              <h4>
                Todas as pessoas cadastradas - As pessoas irão se encaixar nas
                salas automaticamente.
              </h4>
            </Desc>
            <Button to="rooms">
              <FiArrowLeft size={20} />
              <span>Salas</span>
            </Button>
            <Button to="people/new">
              <FiPlusCircle size={20} />
              <span>Novo</span>
            </Button>
          </Head>

          <List>
            <HeadList>
              <ul>
                <li>Nome</li>
                <li>Sobrenome</li>
              </ul>
            </HeadList>

            {!!people.length &&
              people.map((person) => (
                <Link to={`people/${person.id}`}>
                  <ul>
                    <li>{person.name}</li>
                    <li>{person.last_name}</li>
                  </ul>
                </Link>
              ))}
          </List>
        </Main>
      </AnimationContainer>
    </Container>
  );
};

export default People;
