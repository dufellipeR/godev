import FakeRoomRepository from '@modules/room/repositories/fakes/FakeRoomRepository';
import AppError from '@shared/errors/AppError';
import FakePersonRepository from '../repositories/fakes/FakePersonRepository';
import CreatePersonService from './CreatePersonService';

let fakePersonRepository: FakePersonRepository;
let fakeRoomRepository: FakeRoomRepository;

let createPerson: CreatePersonService;

describe('Create a Person', () => {
  beforeEach(() => {
    fakePersonRepository = new FakePersonRepository();
    fakeRoomRepository = new FakeRoomRepository();
    createPerson = new CreatePersonService(
      fakePersonRepository,
      fakeRoomRepository,
    );
  });

  it('should be able to create a new person', async () => {
    await fakeRoomRepository.create({
      name: 'event room A',
      type: 'event',
      capacity: 10,
    });

    await fakeRoomRepository.create({
      name: 'event room B',
      type: 'event',
      capacity: 20,
    });

    await fakeRoomRepository.create({
      name: 'coffe room A',
      type: 'coffe',
      capacity: 10,
    });

    await fakeRoomRepository.create({
      name: 'coffe room B',
      type: 'coffe',
      capacity: 20,
    });

    const person1 = await createPerson.execute({
      name: 'joao',
      last_name: '1',
    });

    const person2 = await createPerson.execute({
      name: 'paulo',
      last_name: '2',
    });

    expect(person1).toHaveProperty('id');
    expect(person1.stage1_room).not.toBe(person2.stage1_room);
    expect(person1.coffe1_room).not.toBe(person2.coffe1_room);
  });

  it('should not be able to create a new person when rooms capacity reach out', async () => {
    await fakeRoomRepository.create({
      name: 'event room A',
      type: 'event',
      capacity: 0,
    });

    await fakeRoomRepository.create({
      name: 'event room B',
      type: 'event',
      capacity: 0,
    });

    await expect(
      createPerson.execute({
        name: 'joao',
        last_name: '1',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
