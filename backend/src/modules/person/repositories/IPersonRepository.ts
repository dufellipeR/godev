import ICreatePersonDTO from '../dtos/ICreatePersonDTO';
import IListPersonDTO from '../dtos/IListPersonDTO';
import IUpdatePersonDTO from '../dtos/IUpdatePersonDTO';
import Person from '../infra/typeorm/entities/Person';

export default interface IPersonRepository {
  create(data: ICreatePersonDTO): Promise<Person>;
  list(data: IListPersonDTO): Promise<Person[]>;
  show(person_id: string): Promise<Person | undefined>;
  updateRooms(data: IUpdatePersonDTO): Promise<void>;
}
