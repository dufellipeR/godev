import AppError from '@shared/errors/AppError';
import FakeRoomRepository from '../repositories/fakes/FakeRoomRepository';
import CreateRoomService from './CreateRoomService';

let fakeRoomRepository: FakeRoomRepository;

let createRoom: CreateRoomService;

describe('Create a Room', () => {
  beforeEach(() => {
    fakeRoomRepository = new FakeRoomRepository();
    createRoom = new CreateRoomService(
      fakeRoomRepository,
    );
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
});
