import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IRoomRepository from '@modules/room/repositories/IRoomRepository';
import IPersonRepository from '../repositories/IPersonRepository';
import Person from '../infra/typeorm/entities/Person';

interface IRequestDTO {
  name: string;
  last_name: string;
}

@injectable()
class CreatePersonService {
  constructor(
    @inject('PersonRepository')
    private personRepository: IPersonRepository,

    @inject('RoomRepository')
    private roomRepository: IRoomRepository,
  ) {}

  public async execute({ name, last_name }: IRequestDTO): Promise<Person> {
    const maxCapacity = await this.roomRepository.findMaxCapacity();
    const eventRooms = await this.roomRepository.findByType('event');
    const coffeRooms = await this.roomRepository.findByType('coffe');
    const people = await this.personRepository.list({});
    const peopleLenght = people.length;
    const evenOrOdd = peopleLenght % 2;

    if (peopleLenght >= maxCapacity) {
      throw new AppError('Max Capacity of people reached');
    }

    const person = await this.personRepository.create({
      name,
      last_name,
      stage1_room: eventRooms[evenOrOdd].id,
      coffe1_room: coffeRooms[evenOrOdd].id,
    });

    return person;
  }
}

export default CreatePersonService;
