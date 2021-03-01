import FakeRoomRepository from '@modules/room/repositories/fakes/FakeRoomRepository';
import FakePersonRepository from '../repositories/fakes/FakePersonRepository';
import ListPersonService from './ListPersonService';

let fakePersonRepository: FakePersonRepository;
let fakeRoomRepository: FakeRoomRepository;

let listPerson: ListPersonService;

describe('List  people', () => {
  beforeEach(() => {
    fakePersonRepository = new FakePersonRepository();
    fakeRoomRepository = new FakeRoomRepository();
    listPerson = new ListPersonService(fakePersonRepository);
  });

  it('should be able to list people', async () => {
    const roomB = await fakeRoomRepository.create({
      name: 'event Room B',
      capacity: 10,
      type: 'event',
    });

    const coffeRoomA = await fakeRoomRepository.create({
      name: 'coffe Room A',
      capacity: 10,
      type: 'coffe',
    });

    await fakePersonRepository.create({
      name: 'jonh',
      last_name: 'daniels',
      stage1_room: roomB.id,
      coffe1_room: coffeRoomA.id,
    });

    await fakePersonRepository.create({
      name: 'jack',
      last_name: 'dolls',
      stage1_room: roomB.id,
      coffe1_room: coffeRoomA.id,
    });

    const people = await listPerson.execute({});

    expect(people.length).toBe(2);
  });
});
