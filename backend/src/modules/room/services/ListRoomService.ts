import { injectable, inject } from 'tsyringe';

import IRoomRepository from '../repositories/IRoomRepository';
import Room from '../infra/typeorm/entities/Room';

@injectable()
class ListRoomService {
  constructor(
    @inject('RoomRepository')
    private roomRepository: IRoomRepository,
  ) {}

  public async execute(type?: 'event' | 'coffe'): Promise<Room[]> {
    const rooms = await this.roomRepository.findByType(type);

    return rooms;
  }
}

export default ListRoomService;
