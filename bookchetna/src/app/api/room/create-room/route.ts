import { AppError } from "@/util/AppError";
import { handleApiError } from "@/util/HandleError";
import type { NextRequest } from "next/server";


export default async function POST(req:NextRequest){
    try {

        const body= await req.json()
        if(!body.roomName ){
            throw new AppError("room name is missing",401)
        }
        
        
    } catch (error) {
        handleApiError(error)
        
    }

}