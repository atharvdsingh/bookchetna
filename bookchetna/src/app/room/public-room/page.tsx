import CenterComponent from "@/components/CenterComponent";
import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import PublicRoomCard from "@/components/room/PublicRoomCard";
import AllPublicRoomCard from "@/components/room/publicRoom/AllPublicRoomCard";
import { prisma } from "@/util/Prisma";



async function Page() {
  const session = await getServerSession(authOptions);
  const room=await prisma.roomMembership.findMany({
    where:{
        visibility:"SHOW"
        
    }
  })

  if (!session?.user.id) {
    redirect("./");
  }
 const a:number[]=[12,4,3,3,4,3,4]

  return (
    <>
    
      <CenterComponent className="" >
        <div className="max-w-7xl m-auto" >
            <div className="flex gap-3 mt-20 mx-4 flex-col " >
                {
                            a.map((a,index)=>(
                                <AllPublicRoomCard></AllPublicRoomCard>
                            ))
                    
                }

            </div>


        </div>

      </CenterComponent>
    </>
  );
}

export default Page;
