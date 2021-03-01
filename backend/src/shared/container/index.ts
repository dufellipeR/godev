import { container } from 'tsyringe';

import RoomRepository from '@modules/room/infra/typeorm/repositories/RoomRepository';
import IRoomRepository from '@modules/room/repositories/IRoomRepository';
import IPersonRepository from '@modules/person/repositories/IPersonRepository';
import PersonRepository from '@modules/person/infra/typeorm/repositories/PersonRepository';

container.registerSingleton<IRoomRepository>('RoomRepository', RoomRepository);
container.registerSingleton<IPersonRepository>(
  'PersonRepository',
  PersonRepository,
);
