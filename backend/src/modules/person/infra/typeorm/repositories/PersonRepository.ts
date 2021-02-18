import ICreatePersonDTO from '@modules/person/dtos/ICreatePersonDTO';
import IPersonRepository from '@modules/person/repositories/IPersonRepository';
import { getRepository, Raw, Repository } from 'typeorm';
import Person from '../entities/Person';


class PersonRepository implements IPersonRepository {
  private ormRepository: Repository<Person>;

  constructor() {
    this.ormRepository = getRepository(Person);
  }

  public async create({
    name,
    last_name,
    first_room,
    second_room,
    coffe_room,
  }: ICreatePersonDTO): Promise<Person> {
    const person = this.ormRepository.create({
      name,
      last_name,
      coffe_room,
      first_room,
      second_room,
    });

    await this.ormRepository.save(person);

    return person;
  }
}

export default PersonRepository;
