import { AppError } from "@/util/AppError";
import { handleApiError } from "@/util/HandleError";
import { prisma } from "@/util/Prisma";
import { NextResponse, type NextRequest } from "next/server";


export default async function POST(req:NextRequest){
    try {
        const body= await req.json()
        if(!body.roomName ){
            throw new AppError("room name is missing",401)
        }
        const respons=await prisma.room.create({
            data:{
                roomName:body.roomName,
                discription:body.discription!
            }
        })
        if(!respons){
            throw new AppError(
    "something went wront",500)
        }
        return NextResponse.json({
            message:"room created successfully",success:true
        },{status:200})        
    } catch (error) {
        handleApiError(error)
        
    }
}