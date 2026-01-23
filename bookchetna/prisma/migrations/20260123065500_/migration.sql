/*
  Warnings:

  - A unique constraint covering the columns `[roomName]` on the table `room` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "room_roomName_key" ON "room"("roomName");
