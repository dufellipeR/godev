/* eslint-disable no-shadow */
import { v4 as uuid } from 'uuid';
import Person from '@modules/person/infra/typeorm/entities/Person';
import ICreatePersonDTO from '@modules/person/dtos/ICreatePersonDTO';
import IUpdatePersonDTO from '@modules/person/dtos/IUpdatePersonDTO';
import IListPersonDTO from '@modules/person/dtos/IListPersonDTO';
import IPersonRepository from '../IPersonRepository';

class FakePersonRepository implements IPersonRepository {
  private people: Person[] = [];

  public async show(person_id: string): Promise<Person | undefined> {
    const person = this.people.find(person => person.id === person_id);

    return person;
  }

  public async updateRooms(data: IUpdatePersonDTO): Promise<void> {
    const { id, stage1_room, stage2_room, coffe1_room, coffe2_room } = data;

    const person = this.people.find(p => p.id === id);

    if (!person) {
      return;
    }

    person.stage1_room = stage1_room || person.stage1_room;
    person.stage2_room = stage2_room || person.stage2_room;
    person.coffe1_room = coffe1_room || person.coffe1_room;
    person.coffe2_room = coffe2_room || person.coffe2_room;
  }

  public async list({ room, stage }: IListPersonDTO): Promise<Person[]> {
    let peopleFiltered;
    switch (stage) {
      case 'stage1':
        peopleFiltered = this.people.filter(
          person => person.stage1_room === room,
        );
        break;
      case 'stage2':
        peopleFiltered = this.people.filter(
          person => person.stage2_room === room,
        );
        break;
      case 'coffe1':
        peopleFiltered = this.people.filter(
          person => person.coffe1_room === room,
        );
        break;
      case 'coffe2':
        peopleFiltered = this.people.filter(
          person => person.coffe2_room === room,
        );
        break;
      default:
        peopleFiltered = this.people;
        break;
    }

    return peopleFiltered;
  }

  public async create({
    name,
    last_name,
    stage1_room,
    coffe1_room,
  }: ICreatePersonDTO): Promise<Person> {
    const person = new Person();

    Object.assign(person, {
      id: uuid(),
      name,
      last_name,
      stage1_room,
      coffe1_room,
    });

    this.people.push(person);

    return person;
  }
}

export default FakePersonRepository;
