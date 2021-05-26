"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreatePlan1621744755020 = void 0;

class CreatePlan1621744755020 {
  constructor() {
    this.name = 'CreatePlan1621744755020';
  }

  async up(queryRunner) {
    await queryRunner.query(`CREATE TABLE "Plan" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "origin" integer NOT NULL, "destiny" integer NOT NULL, "price" numeric NOT NULL, CONSTRAINT "PK_2239586f507efc3115f2ebf769b" PRIMARY KEY ("id"))`);
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "Plan"`);
  }

}

exports.CreatePlan1621744755020 = CreatePlan1621744755020;