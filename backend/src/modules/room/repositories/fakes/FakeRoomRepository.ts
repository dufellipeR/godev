import { v4 as uuid } from 'uuid';
import Room from '@modules/room/infra/typeorm/entities/Room';
import ICreateRoomDTO from '@modules/room/dtos/ICreateRoomDTO';
import IRoomRepository from '../IRoomRepository';

class FakeRoomRepository implements IRoomRepository {
  private rooms: Room[] = [];

  public async showRoom(room_id: string): Promise<Room | undefined> {
    const room = this.rooms.find(r => r.id === room_id);

    return room;
  }

  public async findMaxCapacity(): Promise<number> {
    const eventRooms = this.rooms.filter(room => room.type === 'event');
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
      maxCapacity = smallCapacity + 1;
    } else {
      maxCapacity = smallCapacity;
    }

    return maxCapacity;
  }

  public async findByType(type: 'event' | 'coffe'): Promise<Room[]> {
    const rooms = this.rooms.filter(room => room.type === type);
    return rooms;
  }

  public async create({ name, capacity, type }: ICreateRoomDTO): Promise<Room> {
    const room = new Room();

    Object.assign(room, {
      id: uuid(),
      name,
      capacity,
      type,
    });

    this.rooms.push(room);

    return room;
  }
}

export default FakeRoomRepository;
