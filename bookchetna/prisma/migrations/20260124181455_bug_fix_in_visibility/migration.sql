/*
  Warnings:

  - You are about to drop the column `visibility` on the `RoomMembership` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "RoomMembership" DROP COLUMN "visibility";

-- AlterTable
ALTER TABLE "room" ADD COLUMN     "visibility" "visibilityStatusEnum" NOT NULL DEFAULT 'SHOW';
