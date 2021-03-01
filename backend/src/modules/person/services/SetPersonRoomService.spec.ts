import FakeRoomRepository from '@modules/room/repositories/fakes/FakeRoomRepository';
import FakePersonRepository from '../repositories/fakes/FakePersonRepository';
import SetPersonRoomService from './SetPersonRoomService';

let fakePersonRepository: FakePersonRepository;
let fakeRoomRepository: FakeRoomRepository;

let setPersonRoom: SetPersonRoomService;

describe('Create a Person', () => {
  beforeEach(() => {
    fakePersonRepository = new FakePersonRepository();
    fakeRoomRepository = new FakeRoomRepository();
    setPersonRoom = new SetPersonRoomService(
      fakePersonRepository,
      fakeRoomRepository,
    );
  });

  it('should be able to balance people between rooms', async () => {
    const roomA = await fakeRoomRepository.create({
      name: 'event Room A',
      capacity: 10,
      type: 'event',
    });

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

    const coffeRoomB = await fakeRoomRepository.create({
      name: 'coffe Room B',
      capacity: 10,
      type: 'coffe',
    });

    await fakePersonRepository.create({
      name: 'person1',
      last_name: '1',
      stage1_room: roomA.id,
      coffe1_room: coffeRoomA.id,
    });

    await fakePersonRepository.create({
      name: 'person2',
      last_name: '2',
      stage1_room: roomB.id,
      coffe1_room: coffeRoomB.id,
    });

    await fakePersonRepository.create({
      name: 'person3',
      last_name: '1',
      stage1_room: roomA.id,
      coffe1_room: coffeRoomA.id,
    });

    await fakePersonRepository.create({
      name: 'person4',
      last_name: '2',
      stage1_room: roomB.id,
      coffe1_room: coffeRoomB.id,
    });

    await setPersonRoom.execute();

    const people = await fakePersonRepository.list({});

    expect(people[0]).toHaveProperty('stage2_room');
    expect(people[0]).toHaveProperty('coffe2_room');
  });
});
