import { container } from 'tsyringe';

import RoomRepository from '@modules/room/infra/typeorm/repositories/RoomRepository';
import IRoomRepository from '@modules/room/repositories/IRoomRepository';


container.registerSingleton<IRoomRepository>(
  'RoomRepository',
  RoomRepository,
);



