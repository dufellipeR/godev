import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class CreateRoom2FkToPeople1613687749310
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'people',
      new TableColumn({
        name: 'stage2_room',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'people',
      new TableForeignKey({
        name: 'UserStage2Room',
        columnNames: ['stage2_room'],
        referencedColumnNames: ['id'],
        referencedTableName: 'rooms',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('people', 'UserStage2Room');

    await queryRunner.dropColumn('people', 'stage2_room');
  }
}
