import CenterComponent from "@/components/CenterComponent";
import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import CreateRoomCard from "@/components/room/CreateRoomCard";
import JoinRoomCard from "@/components/room/JoinRoomCard";
import { Users } from "lucide-react";

async function Page() {
  const session = await getServerSession(authOptions);

  if (!session?.user.id) {
    redirect("./");
  }

  return (
    <>
      <CenterComponent className="min-h-screen" >
        <div className="flex flex-col justify-evenly min-h-screen items-center" >

        <div>
          <div className="flex gap-3  justify-center items-center flex-col ">
            <div className="flex justify-center items-center gap-2 " >
              <Users size={60}  />
              <p className="font-bold text-xl" >BookRent Rooms</p>
            </div>
            <p className="text-gray-300" >
              Create a new room or join an existing one to start renting books
            </p>
          </div>
        </div>

        <div className="flex flex-wrap  justify-center items-center gap-5">
          <CreateRoomCard />
          <JoinRoomCard />
        </div>
        </div>
      </CenterComponent>
    </>
  );
}

export default Page;
