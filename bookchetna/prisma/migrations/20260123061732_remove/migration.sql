/*
  Warnings:

  - You are about to drop the column `adminId` on the `room` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."room" DROP CONSTRAINT "room_adminId_fkey";

-- AlterTable
ALTER TABLE "room" DROP COLUMN "adminId";
