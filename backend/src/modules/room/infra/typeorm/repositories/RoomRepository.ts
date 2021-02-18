import ICreateRoomDTO from '@modules/room/dtos/ICreateRoomDTO';
import IRoomRepository from '@modules/room/repositories/IRoomRepository';
import { getRepository, Raw, Repository } from 'typeorm';
import Room from '../entities/Room';

class RoomRepository implements IRoomRepository {
  private ormRepository: Repository<Room>;

  constructor() {
    this.ormRepository = getRepository(Room);
  }

  public async create({
    name,
    capacity,
    type,

  }: ICreateRoomDTO): Promise<Room> {
    const room = this.ormRepository.create({
      name,
      capacity: Number(capacity),
      type,
    });

    await this.ormRepository.save(room);

    return room;
  }
}

export default RoomRepository;
