import { format, getHours, isBefore, startOfHour } from 'date-fns';
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

  public async execute({
    name,
    capacity,
    type,
  }: IRequestDTO): Promise<Room> {

    const room = await this.roomRepository.create({
      name,
      capacity: Number(capacity),
      type,
    });

    return room;
  }
}

export default CreateRoomService;
