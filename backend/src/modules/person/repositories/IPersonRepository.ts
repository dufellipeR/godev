import ICreatePersonDTO from "../dtos/ICreatePersonDTO";
import Person from "../infra/typeorm/entities/Person";

export default interface IPersonRepository {
  create(data: ICreatePersonDTO): Promise<Person>;

}
