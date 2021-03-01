import React, { useEffect, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';
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
  Stage1,
  Stage2,
  StageName,
} from './styles';

interface IRoomParams {
  room_id: string;
}

interface IRoom {
  id: string;
  name: string;
  type: string;
  capacity: number;
}

interface IPerson {
  id: string;
  name: string;
  last_name: string;
}

const Room: React.FC = () => {
  const [room, setRoom] = useState<IRoom | null>(null);
  const [stage1, setStage1] = useState<IPerson[]>([]);
  const [stage2, setStage2] = useState<IPerson[]>([]);

  const { params } = useRouteMatch<IRoomParams>();

  useEffect(() => {
    api.get<IRoom>(`room/${params.room_id}`).then((response) => {
      setRoom(response.data);
    });
  }, [params]);

  useEffect(() => {
    if (room?.type === 'event') {
      api
        .get<IPerson[]>(`person/?room=${params.room_id}&stage=stage1`)
        .then((response) => {
          setStage1(response.data);
        });

      api
        .get<IPerson[]>(`person/?room=${params.room_id}&stage=stage2`)
        .then((response) => {
          setStage2(response.data);
        });
    }

    if (room?.type === 'coffe') {
      api
        .get<IPerson[]>(`person/?room=${params.room_id}&stage=coffe1`)
        .then((response) => {
          setStage1(response.data);
        });

      api
        .get<IPerson[]>(`person/?room=${params.room_id}&stage=coffe2`)
        .then((response) => {
          setStage2(response.data);
        });
    }
  }, [room, params]);

  return (
    <Container>
      <Title>Go Dev</Title>
      <Link to="/rooms" style={{ marginBottom: 60 }}>
        <FiArrowLeft size={64} color="#ff9000" />
      </Link>
      {!!room && (
        <Main>
          <Head>
            <Desc>
              <h2>{room.name}</h2>
              <h4>Capacidade de {room.capacity} pessoas</h4>
            </Desc>
          </Head>

          <List>
            <Stage1>
              <StageName>Etapa 1</StageName>
              <HeadList>
                <ul>
                  <li>Nome</li>
                  <li>Sobrenome</li>
                </ul>
              </HeadList>
              {!!stage1.length &&
                stage1.map((person) => (
                  <Link to={`/people/${person.id}`}>
                    <ul>
                      <li>{person.name}</li>
                      <li>{person.last_name}</li>
                    </ul>
                  </Link>
                ))}
            </Stage1>
            <Stage2>
              <StageName>Etapa 2</StageName>
              <HeadList>
                <ul>
                  <li>Nome</li>
                  <li>Sobrenome</li>
                </ul>
              </HeadList>
              {!!stage2.length &&
                stage2.map((person) => (
                  <Link to={`/people/${person.id}`}>
                    <ul>
                      <li>{person.name}</li>
                      <li>{person.last_name}</li>
                    </ul>
                  </Link>
                ))}
            </Stage2>
          </List>
        </Main>
      )}
    </Container>
  );
};

export default Room;
