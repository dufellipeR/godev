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
  name: string

  @Column()
  last_name: string

  @Column()
  first_room: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  firstRoom: User;

  @Column()
  second_room: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  secondRoom: User;

  @Column()
  coffe_room: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  coffeRoom: User;

}

export default Person;
