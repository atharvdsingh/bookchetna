import CenterComponent from "@/components/CenterComponent";
import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AllPublicRoomCard from "@/components/room/publicRoom/AllPublicRoomCard";
import { prisma } from "@/util/Prisma";
import type { Prisma } from "@prisma/client";

export type roomTypeForCardWithName = Prisma.roomGetPayload<{
  include: {
    members: {
      include: {
        member: {
          select: {
            name: true;
          };
        };
      };
    };
  };
}>;

async function Page() {
  const session = await getServerSession(authOptions);
  const rooms: roomTypeForCardWithName[] = await prisma.room.findMany({
    where: {
      visibility: "SHOW",
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
  if (!session?.user.id) {
    redirect("./");
  }

  return (
    <>
      <CenterComponent className="">
        <div className="max-w-7xl m-auto">
          <div className="flex gap-3 mt-20 mx-4 flex-col ">
            {rooms.map((room) => (
              <AllPublicRoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </CenterComponent>
    </>
  );
}

export default Page;
