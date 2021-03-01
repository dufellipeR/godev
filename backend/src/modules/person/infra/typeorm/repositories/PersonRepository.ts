import ICreatePersonDTO from '@modules/person/dtos/ICreatePersonDTO';
import IListPersonDTO from '@modules/person/dtos/IListPersonDTO';
import IUpdatePersonDTO from '@modules/person/dtos/IUpdatePersonDTO';
import IPersonRepository from '@modules/person/repositories/IPersonRepository';
import { getRepository, Repository } from 'typeorm';
import Person from '../entities/Person';

class PersonRepository implements IPersonRepository {
  private ormRepository: Repository<Person>;

  constructor() {
    this.ormRepository = getRepository(Person);
  }

  public async show(person_id: string): Promise<Person | undefined> {
    const person = this.ormRepository.findOne({ where: { id: person_id } });

    return person;
  }

  public async updateRooms(data: IUpdatePersonDTO): Promise<void> {
    const { id, stage1_room, stage2_room, coffe1_room, coffe2_room } = data;
    const person = await this.ormRepository.findOne(id);

    if (!person) {
      return;
    }

    person.stage1_room = stage1_room || person.stage1_room;
    person.stage2_room = stage2_room || person.stage2_room;
    person.coffe1_room = coffe1_room || person.coffe1_room;
    person.coffe2_room = coffe2_room || person.coffe2_room;

    await this.ormRepository.save(person);
  }

  public async list({ room, stage }: IListPersonDTO): Promise<Person[]> {
    let people;
    switch (stage) {
      case 'stage1':
        people = this.ormRepository.find({
          where: { stage1_room: room },
          order: {
            name: 'ASC',
          },
        });
        break;
      case 'stage2':
        people = this.ormRepository.find({
          where: { stage2_room: room },
          order: {
            name: 'ASC',
          },
        });
        break;
      case 'coffe1':
        people = this.ormRepository.find({
          where: { coffe1_room: room },
          order: {
            name: 'ASC',
          },
        });
        break;
      case 'coffe2':
        people = this.ormRepository.find({
          where: { coffe2_room: room },
          order: {
            name: 'ASC',
          },
        });
        break;
      default:
        people = this.ormRepository.find({ order: { name: 'ASC' } });
        break;
    }

    return people;
  }

  public async create({
    name,
    last_name,
    stage1_room,
    coffe1_room,
  }: ICreatePersonDTO): Promise<Person> {
    const person = this.ormRepository.create({
      name,
      last_name,
      stage1_room,
      coffe1_room,
    });

    await this.ormRepository.save(person);

    return person;
  }
}

export default PersonRepository;
