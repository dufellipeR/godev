import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class CreateCoffeRoomFkToPeople1613687759034
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'people',
      new TableColumn({
        name: 'coffe1_room',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'people',
      new TableForeignKey({
        name: 'UserCoffe1Room',
        columnNames: ['coffe1_room'],
        referencedColumnNames: ['id'],
        referencedTableName: 'rooms',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('people', 'UserCoffe1Room');

    await queryRunner.dropColumn('people', 'coffe1_room');
  }
}
