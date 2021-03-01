import CreateRoomService from '@modules/room/services/CreateRoomService';
import ListRoomService from '@modules/room/services/ListRoomService';
import ShowRoomService from '@modules/room/services/ShowRoomService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class RoomController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, capacity, type } = req.body;

    const createRoom = container.resolve(CreateRoomService);

    const room = await createRoom.execute({
      name,
      capacity,
      type,
    });
    return res.json(room);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const showRoom = container.resolve(ShowRoomService);

    const room = await showRoom.execute(id);
    return res.json(room);
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const { type } = req.query;

    const listRoom = container.resolve(ListRoomService);

    const rooms = await listRoom.execute(type as 'event' | 'coffe');
    return res.json(rooms);
  }
}
