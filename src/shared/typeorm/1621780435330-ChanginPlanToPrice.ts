import {MigrationInterface, QueryRunner} from "typeorm";

export class ChanginPlanToPrice1621780435330 implements MigrationInterface {
    name = 'ChanginPlanToPrice1621780435330'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Price" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "origin" integer NOT NULL, "destiny" integer NOT NULL, "price" numeric NOT NULL, CONSTRAINT "PK_31cabc719b61fdc590129ba463f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Plan" DROP COLUMN "origin"`);
        await queryRunner.query(`ALTER TABLE "Plan" DROP COLUMN "destiny"`);
        await queryRunner.query(`ALTER TABLE "Plan" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "Plan" ADD "name" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Plan" ADD "minutes" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Plan" DROP COLUMN "minutes"`);
        await queryRunner.query(`ALTER TABLE "Plan" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "Plan" ADD "price" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Plan" ADD "destiny" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Plan" ADD "origin" integer NOT NULL`);
        await queryRunner.query(`DROP TABLE "Price"`);
    }

}
