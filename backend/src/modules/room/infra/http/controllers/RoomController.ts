import CreateRoomService from '@modules/room/services/CreateRoomService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class RoomController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, capacity, type } = req.body;

    const createRoom = container.resolve(CreateRoomService);

    const room = await createRoom.execute({
      name, capacity, type
    });
    return res.json(room);
  }
}
