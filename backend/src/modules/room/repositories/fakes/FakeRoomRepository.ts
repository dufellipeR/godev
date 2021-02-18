import { v4 as uuid } from 'uuid';
import Room from '@modules/room/infra/typeorm/entities/Room';
import ICreateRoomDTO from '@modules/room/dtos/ICreateRoomDTO';
import IRoomRepository from '../IRoomRepository';

class FakeRoomRepository implements IRoomRepository {
  private rooms: Room[] = [];

  public async create({
    name,
    capacity,
    type,
  }: ICreateRoomDTO): Promise<Room> {
    const room = new Room();

    Object.assign(room, {
      id: uuid(),
      name,
      capacity,
      type
    });

    this.rooms.push(room);

    return room;
  }
}

export default FakeRoomRepository;
