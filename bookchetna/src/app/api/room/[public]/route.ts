import { AppError } from "@/util/AppError";
import { GetTheSession } from "@/util/GetTheSession";
import { handleApiError } from "@/util/HandleError";
import { prisma } from "@/util/Prisma";
import { NextResponse, type NextRequest } from "next/server";

export async function  GET(request:NextRequest){
    try {

      const session= await GetTheSession()
      if(!session?.user.id){
        throw new AppError("Unauthrized",400)
      }
        const {searchParams}=new URL(request.url) 
        const offset=searchParams.get("offset")
        const limit=searchParams.get("limit")
        console.log(offset,limit)
        const rooms = await prisma.room.findMany({
            where: {
              visibility: "SHOW",
            },
            skip:Number(offset!),
            take:Number(limit)!,
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
          return NextResponse.json({data:rooms,success:true},{status:200})
        
        
    } catch (error) {
        return handleApiError(error)
        
    }

}