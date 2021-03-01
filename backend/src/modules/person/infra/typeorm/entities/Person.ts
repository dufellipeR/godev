import Room from '@modules/room/infra/typeorm/entities/Room';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('people')
class Person {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  last_name: string;

  @Column()
  stage1_room?: string;

  @ManyToOne(() => Room)
  @JoinColumn({ name: 'stage1_room' })
  first_room: Room;

  @Column()
  stage2_room?: string;

  @ManyToOne(() => Room)
  @JoinColumn({ name: 'stage2_room' })
  second_room: Room;

  @Column()
  coffe1_room?: string;

  @ManyToOne(() => Room)
  @JoinColumn({ name: 'coffe1_room' })
  coffe1Room: Room;

  @Column()
  coffe2_room?: string;

  @ManyToOne(() => Room)
  @JoinColumn({ name: 'coffe2_room' })
  coffe2Room: Room;
}

export default Person;
