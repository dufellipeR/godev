import FakeRoomRepository from '../repositories/fakes/FakeRoomRepository';
import ListRoomService from './ListRoomService';

let fakeRoomRepository: FakeRoomRepository;

let listRoom: ListRoomService;

describe('List Rooms', () => {
  beforeEach(() => {
    fakeRoomRepository = new FakeRoomRepository();
    listRoom = new ListRoomService(fakeRoomRepository);
  });

  it('should be able to list rooms', async () => {
    await fakeRoomRepository.create({
      name: 'event room 1',
      capacity: 10,
      type: 'event',
    });

    await fakeRoomRepository.create({
      name: 'event room 2',
      capacity: 10,
      type: 'event',
    });

    await fakeRoomRepository.create({
      name: 'coffe room 1',
      capacity: 10,
      type: 'coffe',
    });

    const roomsEvent = await listRoom.execute('event');
    const roomsCoffe = await listRoom.execute('coffe');

    expect(roomsEvent).toHaveLength(2);
    expect(roomsCoffe).toHaveLength(1);
  });
});
