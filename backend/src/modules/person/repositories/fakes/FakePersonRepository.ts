import { v4 as uuid } from 'uuid';
import IPersonRepository from '../IPersonRepository';
import Person from '@modules/person/infra/typeorm/entities/Person';
import ICreatePersonDTO from '@modules/person/dtos/ICreatePersonDTO';

class FakePersonRepository implements IPersonRepository {
  private people: Person[] = [];

  public async create({
    name,
    last_name,
    first_room,
    second_room,
    coffe_room,
  }: ICreatePersonDTO): Promise<Person> {
    const person = new Person();

    Object.assign(person, {
      id: uuid(),
      name,
      last_name,
      first_room,
      second_room,
      coffe_room, });

    this.people.push(person);

    return person;
  }
}

export default FakePersonRepository;
