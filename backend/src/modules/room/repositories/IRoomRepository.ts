import ICreateRoomDTO from '../dtos/ICreateRoomDTO';
import Room from '../infra/typeorm/entities/Room';

export default interface IRoomRepository {
  create(data: ICreateRoomDTO): Promise<Room>;
  findByType(type?: 'event' | 'coffe'): Promise<Room[]>;
  findMaxCapacity(): Promise<number>;
  showRoom(room_id: string): Promise<Room | undefined>;
}
