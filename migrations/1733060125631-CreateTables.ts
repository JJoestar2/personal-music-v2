import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1733060125631 implements MigrationInterface {
    name = 'CreateTables1733060125631'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "music_categories" ("id" SERIAL NOT NULL, "category" character varying NOT NULL, CONSTRAINT "PK_6bd645461a61709418fc1c8b1c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "soundtrack" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "linkToMP3" character varying NOT NULL, "previewPath" character varying NOT NULL, "categoryId" integer, CONSTRAINT "PK_3d13578aab7c4aa4dd9ae4f4fcf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "collection" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "poster" character varying NOT NULL, "status" character varying NOT NULL, "userId" integer, CONSTRAINT "PK_ad3f485bbc99d875491f44d7c85" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "avatar" character varying NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "collection_soundtrack_soundtrack" ("collectionId" integer NOT NULL, "soundtrackId" integer NOT NULL, CONSTRAINT "PK_9dee959cc49fb0afdbb243f596c" PRIMARY KEY ("collectionId", "soundtrackId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0d50eec5542c90a1a4751d5f76" ON "collection_soundtrack_soundtrack" ("collectionId") `);
        await queryRunner.query(`CREATE INDEX "IDX_ad3f534585424481ac480c9346" ON "collection_soundtrack_soundtrack" ("soundtrackId") `);
        await queryRunner.query(`ALTER TABLE "soundtrack" ADD CONSTRAINT "FK_3be7aed90a6edd780059592bccb" FOREIGN KEY ("categoryId") REFERENCES "music_categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "collection" ADD CONSTRAINT "FK_ca25eb01f75a85272300f336029" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "collection_soundtrack_soundtrack" ADD CONSTRAINT "FK_0d50eec5542c90a1a4751d5f76a" FOREIGN KEY ("collectionId") REFERENCES "collection"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "collection_soundtrack_soundtrack" ADD CONSTRAINT "FK_ad3f534585424481ac480c93466" FOREIGN KEY ("soundtrackId") REFERENCES "soundtrack"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "collection_soundtrack_soundtrack" DROP CONSTRAINT "FK_ad3f534585424481ac480c93466"`);
        await queryRunner.query(`ALTER TABLE "collection_soundtrack_soundtrack" DROP CONSTRAINT "FK_0d50eec5542c90a1a4751d5f76a"`);
        await queryRunner.query(`ALTER TABLE "collection" DROP CONSTRAINT "FK_ca25eb01f75a85272300f336029"`);
        await queryRunner.query(`ALTER TABLE "soundtrack" DROP CONSTRAINT "FK_3be7aed90a6edd780059592bccb"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ad3f534585424481ac480c9346"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0d50eec5542c90a1a4751d5f76"`);
        await queryRunner.query(`DROP TABLE "collection_soundtrack_soundtrack"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "collection"`);
        await queryRunner.query(`DROP TABLE "soundtrack"`);
        await queryRunner.query(`DROP TABLE "music_categories"`);
    }

}
