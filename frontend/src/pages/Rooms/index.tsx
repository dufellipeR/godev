import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlusCircle } from 'react-icons/fi';
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

import api from '../../services/api';

interface IRoom {
  id: string;
  name: string;
  type: string;
  capacity: number;
}

const Rooms: React.FC = () => {
  const [rooms, setRooms] = useState<IRoom[]>([]);

  useEffect(() => {
    api.get<IRoom[]>('/room').then((response) => {
      setRooms(response.data);
    });
  }, []);

  return (
    <Container>
      <AnimationContainer>
        <Title>Go Dev</Title>

        <Main>
          <Head>
            <Desc>
              <h2>Salas</h2>
              <h4>
                Todas as salas cadastradas - Cadastre pelo menos 2 salas de cada
                tipo
              </h4>
            </Desc>
            {rooms.length === 4 && (
              <Button to="people">
                <FiArrowRight size={20} />
                <span>Pessoas</span>
              </Button>
            )}

            <Button to="rooms/new">
              <FiPlusCircle size={20} />
              <span>Novo</span>
            </Button>
          </Head>

          <List>
            <HeadList>
              <ul>
                <li>Nome</li>
                <li>Tipo</li>
                <li>Lotação</li>
              </ul>
            </HeadList>

            {!!rooms.length &&
              rooms.map((room) => (
                <Link to={`rooms/${room.id}`}>
                  <ul>
                    <li>{room.name}</li>
                    <li>{room.type === 'event' ? 'Evento' : 'Café'}</li>
                    <li>{room.capacity}</li>
                  </ul>
                </Link>
              ))}
          </List>
        </Main>
      </AnimationContainer>
    </Container>
  );
};

export default Rooms;
