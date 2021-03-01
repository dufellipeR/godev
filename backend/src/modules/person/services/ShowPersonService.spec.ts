import FakeRoomRepository from '@modules/room/repositories/fakes/FakeRoomRepository';
import AppError from '@shared/errors/AppError';
import FakePersonRepository from '../repositories/fakes/FakePersonRepository';
import ShowPersonService from './ShowPersonService';

let fakePersonRepository: FakePersonRepository;
let fakeRoomRepository: FakeRoomRepository;

let showPerson: ShowPersonService;

describe('Show a person', () => {
  beforeEach(() => {
    fakePersonRepository = new FakePersonRepository();
    fakeRoomRepository = new FakeRoomRepository();
    showPerson = new ShowPersonService(fakePersonRepository);
  });

  it('should be able to show a person', async () => {
    const eventA = await fakeRoomRepository.create({
      name: 'event room A',
      type: 'event',
      capacity: 20,
    });

    const coffeA = await fakeRoomRepository.create({
      name: 'coffe room A',
      type: 'coffe',
      capacity: 10,
    });

    const eventB = await fakeRoomRepository.create({
      name: 'event room B',
      type: 'event',
      capacity: 20,
    });

    const coffeB = await fakeRoomRepository.create({
      name: 'coffe room B',
      type: 'coffe',
      capacity: 10,
    });

    const person1 = await fakePersonRepository.create({
      name: 'joao',
      last_name: '1',
      stage1_room: eventA.id,
      coffe1_room: coffeA.id,
    });

    const person2 = await fakePersonRepository.create({
      name: 'paulo',
      last_name: '2',
      stage1_room: eventA.id,
      coffe1_room: coffeA.id,
    });

    await fakePersonRepository.updateRooms({
      id: person1.id,
      stage2_room: eventB.id,
      coffe2_room: coffeB.id,
    });

    await fakePersonRepository.updateRooms({
      id: person2.id,
      stage2_room: eventB.id,
      coffe2_room: coffeB.id,
    });

    const person = await showPerson.execute(person2.id);

    expect(person.id).toBe(person2.id);
  });

  it('should not be able to show a person with invalid ID', async () => {
    const eventA = await fakeRoomRepository.create({
      name: 'event room A',
      type: 'event',
      capacity: 20,
    });

    const coffeA = await fakeRoomRepository.create({
      name: 'coffe room A',
      type: 'coffe',
      capacity: 10,
    });

    const eventB = await fakeRoomRepository.create({
      name: 'event room B',
      type: 'event',
      capacity: 20,
    });

    const coffeB = await fakeRoomRepository.create({
      name: 'coffe room B',
      type: 'coffe',
      capacity: 10,
    });

    const person1 = await fakePersonRepository.create({
      name: 'joao',
      last_name: '1',
      stage1_room: eventA.id,
      coffe1_room: coffeA.id,
    });

    const person2 = await fakePersonRepository.create({
      name: 'paulo',
      last_name: '2',
      stage1_room: eventA.id,
      coffe1_room: coffeA.id,
    });

    await fakePersonRepository.updateRooms({
      id: person1.id,
      stage2_room: eventB.id,
      coffe2_room: coffeB.id,
    });

    await fakePersonRepository.updateRooms({
      id: person2.id,
      stage2_room: eventB.id,
      coffe2_room: coffeB.id,
    });

    await expect(showPerson.execute('invalid-id')).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
