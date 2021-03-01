import ICreateRoomDTO from '@modules/room/dtos/ICreateRoomDTO';
import IRoomRepository from '@modules/room/repositories/IRoomRepository';
import { getRepository, Repository } from 'typeorm';
import Room from '../entities/Room';

class RoomRepository implements IRoomRepository {
  private ormRepository: Repository<Room>;

  constructor() {
    this.ormRepository = getRepository(Room);
  }

  public async showRoom(room_id: string): Promise<Room | undefined> {
    const room = this.ormRepository.findOne({ where: { id: room_id } });

    return room;
  }

  public async findMaxCapacity(): Promise<number> {
    const eventRooms = await this.ormRepository.find({
      where: {
        type: 'event',
      },
    });
    let smallCapacity: number = eventRooms[0].capacity;
    let largeCapacity = 0;
    let maxCapacity = 0;

    eventRooms.forEach(room => {
      if (room.capacity >= largeCapacity) {
        largeCapacity = room.capacity;
      }

      if (room.capacity <= smallCapacity) {
        smallCapacity = room.capacity;
      }
    });

    if (smallCapacity !== largeCapacity) {
      maxCapacity = smallCapacity * 2 + 1;
    } else {
      maxCapacity = smallCapacity * 2;
    }

    return maxCapacity;
  }

  public async findByType(type?: 'event' | 'coffe'): Promise<Room[]> {
    const rooms = type
      ? this.ormRepository.find({
          where: {
            type,
          },
          order: {
            capacity: 'DESC',
          },
        })
      : this.ormRepository.find({ order: { capacity: 'DESC' } });

    return rooms;
  }

  public async create({ name, capacity, type }: ICreateRoomDTO): Promise<Room> {
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
