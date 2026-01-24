import CenterComponent from "@/components/CenterComponent";
import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AllPublicRoomCard from "@/components/room/publicRoom/AllPublicRoomCard";
import { prisma } from "@/util/Prisma";
import type { Prisma } from "@prisma/client";
import PublickRoomWrapper from "@/components/room/publicRoom/PublickRoomWrapper";

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
    take:8
    ,
    orderBy:{
      id:"desc"
    }
    ,
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
  },);
  console.log(rooms);
  if (!session?.user.id) {
    redirect("./");
  }

  return (
    <>
      <CenterComponent className="">
        <div className="max-w-7xl m-auto">
          <PublickRoomWrapper rooms={rooms} />
        </div>
      </CenterComponent>
    </>
  );
}

export default Page;
