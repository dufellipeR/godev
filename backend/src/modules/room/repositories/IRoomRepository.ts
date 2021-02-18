import ICreateRoomDTO from "../dtos/ICreateRoomDTO";
import Room from "../infra/typeorm/entities/Room";


export default interface IRoomRepository {
  create(data: ICreateRoomDTO): Promise<Room>;
}
