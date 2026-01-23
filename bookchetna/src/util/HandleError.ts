import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { AppError } from "./AppError";

export function handleApiError(error: unknown) {
  // console.error("API ERROR:", error);

  // 1️⃣ OUR custom errors → send to frontend as-is
  if (error instanceof AppError) {
    console.log(error)
    return NextResponse.json(
      {
        success: false,
        message: error.message,
        code: error.code,
      },
      { status: error.status }
    );
  }

  // 2️⃣ Prisma errors → map to safe message
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    // console.log(error)
    if(error.code ==="P2003"){
      const targetError=error.meta?.modelName

      
      // console.log(error)
      return NextResponse.json({
        success:false,
        message:`${targetError} does not exist`,
        code:"DOES_NOT_EXIST"
      },{
        status:410
      })
    }
    if (error.code === "P2002") {
      const targetError:string=error.meta?.target as string
      return NextResponse.json(
        {
          success: false,
          message: `${targetError} already exist`,
          code: "DUPLICATE_REQUEST",
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Database operation failed",
        code: "DATABASE_ERROR",
      },
      { status: 400 }
    );
  }

  // 3️⃣ EVERYTHING ELSE → generic error
  return NextResponse.json(
    {
      success: false,
      message: "Something went wrong. Please try again.",
      code: "INTERNAL_ERROR",
    },
    { status: 500 }
  );
}
