import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class CreateRoom1FkToPeople1613687743232
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'people',
      new TableColumn({
        name: 'stage1_room',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'people',
      new TableForeignKey({
        name: 'UserStage1Room',
        columnNames: ['stage1_room'],
        referencedColumnNames: ['id'],
        referencedTableName: 'rooms',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('people', 'UserStage1Room');

    await queryRunner.dropColumn('people', 'stage1_room');
  }
}
