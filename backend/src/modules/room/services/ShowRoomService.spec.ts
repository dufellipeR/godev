import FakeRoomRepository from '@modules/room/repositories/fakes/FakeRoomRepository';
import AppError from '@shared/errors/AppError';
import ShowRoomService from './ShowRoomService';

let fakeRoomRepository: FakeRoomRepository;

let showRoom: ShowRoomService;

describe('Show a room', () => {
  beforeEach(() => {
    fakeRoomRepository = new FakeRoomRepository();
    showRoom = new ShowRoomService(fakeRoomRepository);
  });

  it('should be able to show a room', async () => {
    await fakeRoomRepository.create({
      name: 'event room A',
      type: 'event',
      capacity: 20,
    });

    await fakeRoomRepository.create({
      name: 'coffe room A',
      type: 'coffe',
      capacity: 10,
    });

    const eventB = await fakeRoomRepository.create({
      name: 'event room B',
      type: 'event',
      capacity: 20,
    });

    await fakeRoomRepository.create({
      name: 'coffe room B',
      type: 'coffe',
      capacity: 10,
    });

    const room = await showRoom.execute(eventB.id);

    expect(eventB.id).toBe(room.id);
  });

  it('should not be able to show a room with invalid ID', async () => {
    await fakeRoomRepository.create({
      name: 'event room A',
      type: 'event',
      capacity: 20,
    });

    await fakeRoomRepository.create({
      name: 'coffe room A',
      type: 'coffe',
      capacity: 10,
    });

    await fakeRoomRepository.create({
      name: 'event room B',
      type: 'event',
      capacity: 20,
    });

    await fakeRoomRepository.create({
      name: 'coffe room B',
      type: 'coffe',
      capacity: 10,
    });

    await expect(showRoom.execute('invalid-id')).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
