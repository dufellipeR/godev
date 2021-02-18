import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('rooms')
class Room {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string

  @Column("int")
  capacity: number

  @Column()
  type: 'event' | 'coffe'

}

export default Room;
