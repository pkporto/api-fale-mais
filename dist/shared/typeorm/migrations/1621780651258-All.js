"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.All1621780651258 = void 0;

class All1621780651258 {
  constructor() {
    this.name = 'All1621780651258';
  }

  async up(queryRunner) {
    await queryRunner.query(`CREATE TABLE "Plan" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "minutes" integer NOT NULL, CONSTRAINT "PK_2239586f507efc3115f2ebf769b" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "Price" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "origin" integer NOT NULL, "destiny" integer NOT NULL, "price" numeric NOT NULL, CONSTRAINT "PK_31cabc719b61fdc590129ba463f" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "Users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "Users"`);
    await queryRunner.query(`DROP TABLE "Price"`);
    await queryRunner.query(`DROP TABLE "Plan"`);
  }

}

exports.All1621780651258 = All1621780651258;