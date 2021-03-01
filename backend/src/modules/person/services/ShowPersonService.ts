import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IPersonRepository from '../repositories/IPersonRepository';
import Person from '../infra/typeorm/entities/Person';

@injectable()
class ShowPersonService {
  constructor(
    @inject('PersonRepository')
    private personRepository: IPersonRepository,
  ) {}

  public async execute(person_id: string): Promise<Person> {
    const person = await this.personRepository.show(person_id);

    if (!person) {
      throw new AppError(`No person with the given id:  ${person_id}`);
    }

    return person;
  }
}

export default ShowPersonService;
