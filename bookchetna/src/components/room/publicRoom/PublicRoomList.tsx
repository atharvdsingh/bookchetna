import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/util/Prisma";
import PublickRoomWrapper from "@/components/room/publicRoom/PublickRoomWrapper";
import type { roomTypeForCardWithName } from "@/types/databaseRoutesType";
import CenterComponent from "@/components/CenterComponent";

/**
 * PublicRoomList (Server Component)
 * 
 * Handles fetching the initial list of public rooms.
 */
async function PublicRoomList() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
     return (
       <CenterComponent>
         <div className="flex justify-center flex-col gap-3 items-center min-h-[50vh]">
            <p className="opacity-50">Please log in to view rooms.</p>
         </div>
       </CenterComponent>
     );
  }

  // Artificial delay for Suspense demo
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const rooms: roomTypeForCardWithName[] = await prisma.room.findMany({
    where: {
      visibility: "SHOW",
    },
    take: 8,
    orderBy: {
      id: "desc",
    },
    include: {
      members: {
        include: {
          member: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  console.log(rooms);

  return (
    <CenterComponent className="">
      <div className="max-w-7xl m-auto">
        <PublickRoomWrapper userId={session.user.id} rooms={rooms} />
      </div>
    </CenterComponent>
  );
}

export default PublicRoomList;
