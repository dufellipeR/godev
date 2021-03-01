import AppError from '@shared/errors/AppError';
import FakeRoomRepository from '../repositories/fakes/FakeRoomRepository';
import CreateRoomService from './CreateRoomService';

let fakeRoomRepository: FakeRoomRepository;

let createRoom: CreateRoomService;

describe('Create a Room', () => {
  beforeEach(() => {
    fakeRoomRepository = new FakeRoomRepository();
    createRoom = new CreateRoomService(fakeRoomRepository);
  });

  it('should be able to create a new room', async () => {
    const room = await createRoom.execute({
      name: 'event room 1',
      capacity: 10,
      type: 'event',
    });

    expect(room).toHaveProperty('id');
    expect(room.name).toBe('event room 1');
  });

  it('should not be able to create a new room when more than 2 rooms of each type have already been created', async () => {
    await createRoom.execute({
      name: 'event room 1',
      capacity: 10,
      type: 'event',
    });

    await createRoom.execute({
      name: 'event room 2',
      capacity: 10,
      type: 'event',
    });

    await createRoom.execute({
      name: 'coffe room 1',
      capacity: 10,
      type: 'coffe',
    });

    await createRoom.execute({
      name: 'coffe room 2',
      capacity: 10,
      type: 'coffe',
    });

    await expect(
      createRoom.execute({
        name: 'event room 3',
        capacity: 10,
        type: 'event',
      }),
    ).rejects.toBeInstanceOf(AppError);

    await expect(
      createRoom.execute({
        name: 'coffe room 3',
        capacity: 10,
        type: 'coffe',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
