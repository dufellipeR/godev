import { injectable, inject } from 'tsyringe';

import IRoomRepository from '@modules/room/repositories/IRoomRepository';
import IPersonRepository from '../repositories/IPersonRepository';

@injectable()
class SetPersonRoomService {
  constructor(
    @inject('PersonRepository')
    private personRepository: IPersonRepository,

    @inject('RoomRepository')
    private roomRepository: IRoomRepository,
  ) {}

  public async execute(): Promise<void> {
    /* This piece of code balance people between rooms
     *and sets where each people should be on an eventual turn/stage change
     */

    const eventRooms = await this.roomRepository.findByType('event');
    const coffeRooms = await this.roomRepository.findByType('coffe');

    // Finding all people on each event room
    const people_stage1a = await this.personRepository.list({
      room: eventRooms[0].id,
      stage: 'stage1',
    });

    const people_stage1b = await this.personRepository.list({
      room: eventRooms[1].id,
      stage: 'stage1',
    });

    // Finding nearly the halv of people on the room with less capacity
    const halv1a = Math.floor(people_stage1a.length / 2);

    // Setting the room for an eventual stage change for first room's people
    const peopleS1af = people_stage1a.slice(0, halv1a);
    const peopleS1as = people_stage1a.slice(halv1a);

    peopleS1af.forEach(person => {
      this.personRepository.updateRooms({
        id: person.id,
        stage2_room: eventRooms[1].id,
        coffe2_room: coffeRooms[1].id,
      });
    });

    peopleS1as.forEach(person => {
      this.personRepository.updateRooms({
        id: person.id,
        stage2_room: eventRooms[0].id,
        coffe2_room: coffeRooms[0].id,
      });
    });

    // Setting the room for an eventual stage change for second room's people
    const peopleS1bf = people_stage1b.slice(0, halv1a);
    const peopleS1bs = people_stage1b.slice(halv1a);

    peopleS1bf.forEach(person => {
      this.personRepository.updateRooms({
        id: person.id,
        stage2_room: eventRooms[0].id,
        coffe2_room: coffeRooms[0].id,
      });
    });

    peopleS1bs.forEach(person => {
      this.personRepository.updateRooms({
        id: person.id,
        stage2_room: eventRooms[1].id,
        coffe2_room: coffeRooms[1].id,
      });
    });
  }
}

export default SetPersonRoomService;
