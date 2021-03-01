import SetPersonRoomService from '@modules/person/services/SetPersonRoomService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class PersonController {
  public async create(req: Request, res: Response): Promise<Response> {
    const balancePeople = container.resolve(SetPersonRoomService);

    const people = await balancePeople.execute();
    return res.json(people).status(200);
  }
}
