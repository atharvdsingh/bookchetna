-- CreateEnum
CREATE TYPE "RoomRole" AS ENUM ('ADMIN', 'MEMBER');

-- CreateEnum
CREATE TYPE "MembershipStatus" AS ENUM ('ACTIVE', 'LEFT', 'BANNED');

-- CreateTable
CREATE TABLE "room" (
    "id" SERIAL NOT NULL,
    "roomName" TEXT NOT NULL,
    "discription" TEXT,
    "adminId" INTEGER NOT NULL,

    CONSTRAINT "room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoomMembership" (
    "id" SERIAL NOT NULL,
    "memberId" INTEGER NOT NULL,
    "roomId" INTEGER NOT NULL,
    "status" "MembershipStatus" NOT NULL DEFAULT 'ACTIVE',
    "roomRole" "RoomRole" NOT NULL DEFAULT 'MEMBER',

    CONSTRAINT "RoomMembership_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RoomMembership_memberId_roomId_key" ON "RoomMembership"("memberId", "roomId");

-- AddForeignKey
ALTER TABLE "room" ADD CONSTRAINT "room_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomMembership" ADD CONSTRAINT "RoomMembership_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomMembership" ADD CONSTRAINT "RoomMembership_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
