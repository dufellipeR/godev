import { injectable, inject } from 'tsyringe';

import IPersonRepository from '../repositories/IPersonRepository';
import Person from '../infra/typeorm/entities/Person';

interface IRequest {
  room?: string;
  stage?: string;
}

@injectable()
class ListPersonService {
  constructor(
    @inject('PersonRepository')
    private personRepository: IPersonRepository,
  ) {}

  public async execute({ room, stage }: IRequest): Promise<Person[]> {
    const people = this.personRepository.list({ room, stage });

    return people;
  }
}

export default ListPersonService;
