import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import NewPerson from '../pages/NewPerson';
import NewRoom from '../pages/NewRoom';
import People from '../pages/People';
import Person from '../pages/Person';
import Room from '../pages/Room';
import Rooms from '../pages/Rooms';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/rooms" exact component={Rooms} />
    <Route path="/people" exact component={People} />
    <Route path="/rooms/new" exact component={NewRoom} />
    <Route path="/people/new" exact component={NewPerson} />
    <Route path="/rooms/:room_id" exact component={Room} />
    <Route path="/people/:person_id" exact component={Person} />
  </Switch>
);

export default Routes;
