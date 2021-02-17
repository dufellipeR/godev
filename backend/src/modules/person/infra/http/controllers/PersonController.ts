import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class PersonController {
  public async create(req: Request, res: Response): Promise<Response> {

    const createPerson = container.resolve(CreatePersonService);

    const person = await createPerson.execute({

    });
    return res.json(person);
  }
}
