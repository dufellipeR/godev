import React from 'react';
import { Link } from 'react-router-dom';
import teamProject from '../../assets/project_team.svg';
import { Title, Container, Main, Image } from './styles';

const Dashboard: React.FC = () => {
  // CODE

  return (
    <Container>
      <Main>
        <Title>Go Dev</Title>
        <Link to="rooms">Iniciar Evento</Link>
      </Main>
      <Image>
        <img src={teamProject} alt="Projeto de Time" />
      </Image>
    </Container>
  );
};

export default Dashboard;
