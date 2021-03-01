import IListPersonDTO from '@modules/person/dtos/IListPersonDTO';
import CreatePersonService from '@modules/person/services/CreatePersonService';
import ListPersonService from '@modules/person/services/ListPersonService';
import ShowPersonService from '@modules/person/services/ShowPersonService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class PersonController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, last_name } = req.body;

    const createPerson = container.resolve(CreatePersonService);

    const person = await createPerson.execute({
      name,
      last_name,
    });
    return res.json(person);
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const { room, stage }: IListPersonDTO = req.query;

    const listPeople = container.resolve(ListPersonService);

    const people = await listPeople.execute({ room, stage });
    return res.json(people);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const showPerson = container.resolve(ShowPersonService);

    const person = await showPerson.execute(id);
    return res.json(person);
  }
}
