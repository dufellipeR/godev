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
  Stage1,
  Stage2,
  StageName,
  Group,
} from './styles';

interface IPerson {
  id: string;
  name: string;
  last_name: string;
  stage1_room: string;
  stage2_room: string;
  coffe1_room: string;
  coffe2_room: string;
}

interface IPersonParams {
  person_id: string;
}

interface IRoom {
  id: string;
  name: string;
}

const Person: React.FC = () => {
  const [person, setPerson] = useState<IPerson | null>(null);
  const [stage1, setStage1] = useState<IRoom | null>(null);
  const [stage2, setStage2] = useState<IRoom | null>(null);
  const [coffe1, setCoffe1] = useState<IRoom | null>(null);
  const [coffe2, setCoffe2] = useState<IRoom | null>(null);

  const { params } = useRouteMatch<IPersonParams>();

  useEffect(() => {
    api.get<IPerson>(`person/${params.person_id}`).then((response) => {
      setPerson(response.data);
    });
  }, [params]);

  useEffect(() => {
    api.get<IRoom>(`room/${person?.stage1_room}`).then((response) => {
      setStage1(response.data);
    });

    api.get<IRoom>(`room/${person?.stage2_room}`).then((response) => {
      setStage2(response.data);
    });

    api.get<IRoom>(`room/${person?.coffe1_room}`).then((response) => {
      setCoffe1(response.data);
    });

    api.get<IRoom>(`room/${person?.coffe2_room}`).then((response) => {
      setCoffe2(response.data);
    });
  }, [person]);

  return (
    <Container>
      <Title>Go Dev</Title>
      <Link to="/people" style={{ marginBottom: 60 }}>
        <FiArrowLeft size={64} color="#ff9000" />
      </Link>
      {!!person && (
        <Main>
          <Head>
            <Desc>
              <h2>
                {person.name} {person.last_name}
              </h2>
            </Desc>
          </Head>

          <List>
            <Stage1>
              <StageName>Etapa 1</StageName>
              <Group to={`/rooms/${stage1?.id}`}>
                <span>Sala:</span>
                <span>{stage1?.name}</span>
              </Group>
              <Group to={`/rooms/${coffe1?.id}`}>
                <span>Café:</span>
                <span>{coffe1?.name}</span>
              </Group>
            </Stage1>
            <Stage2>
              <StageName>Etapa 2</StageName>
              <Group to={`/rooms/${stage2?.id}`}>
                <span>Sala:</span>
                <span>{stage2?.name}</span>
              </Group>
              <Group to={`/rooms/${stage2?.id}`}>
                <span>Café:</span>
                <span>{coffe2?.name}</span>
              </Group>
            </Stage2>
          </List>
        </Main>
      )}
    </Container>
  );
};

export default Person;
