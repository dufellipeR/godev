import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IRoomRepository from '../repositories/IRoomRepository';
import Room from '../infra/typeorm/entities/Room';

interface IRequestDTO {
  name: string;
  capacity: number;
  type: 'event' | 'coffe';
}

@injectable()
class CreateRoomService {
  constructor(
    @inject('RoomRepository')
    private roomRepository: IRoomRepository,
  ) {}

  public async execute({ name, capacity, type }: IRequestDTO): Promise<Room> {
    const eventsRooms = await this.roomRepository.findByType('event');
    const coffeRooms = await this.roomRepository.findByType('coffe');

    if (eventsRooms.length >= 2 && type === 'event') {
      throw new AppError("Max event's room limit reached");
    }

    if (coffeRooms.length >= 2 && type === 'coffe') {
      throw new AppError("Max coffe's room limit reached");
    }

    const room = await this.roomRepository.create({
      name,
      capacity: Number(capacity),
      type,
    });

    return room;
  }
}

export default CreateRoomService;
