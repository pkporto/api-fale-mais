"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserTable1621739257169 = void 0;

class CreateUserTable1621739257169 {
  constructor() {
    this.name = 'CreateUserTable1621739257169';
  }

  async up(queryRunner) {
    await queryRunner.query(`CREATE TABLE "Users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "Users"`);
  }

}

exports.CreateUserTable1621739257169 = CreateUserTable1621739257169;