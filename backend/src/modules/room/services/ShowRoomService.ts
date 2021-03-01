import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IRoomRepository from '../repositories/IRoomRepository';
import Room from '../infra/typeorm/entities/Room';

@injectable()
class ShowRoomService {
  constructor(
    @inject('RoomRepository')
    private roomRepository: IRoomRepository,
  ) {}

  public async execute(room_id: string): Promise<Room> {
    const room = await this.roomRepository.showRoom(room_id);

    if (!room) {
      throw new AppError(`No room with the given id:  ${room_id}`);
    }

    return room;
  }
}

export default ShowRoomService;
