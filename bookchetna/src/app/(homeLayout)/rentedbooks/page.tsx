import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CenterComponent from "@/components/CenterComponent";
import RentalCart from "@/components/Rental/RentalCart";

import { Button } from "@/components/ui/button";
import type { RentalRequestCartType } from "@/types/databaseRoutesType";
import { prisma } from "@/util/Prisma";
import { BookOpen } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";
import RentedBookList from "@/components/Rental/RentedBookList";
import RentedBookSkeleton from "@/components/Rental/RentedBookSkeleton";

async function Page({
  searchParams,
}: {
  searchParams: Promise<{ room?: string }>
}) {
  const session = await getServerSession(authOptions);
  if (!session?.user.id) {
    redirect("/");
  }

  // ---------------------------------------------------------------------------
  // OLD CODE (Moved to RentedBookList.tsx for Granular Loading / Suspense)
  // ---------------------------------------------------------------------------
  /*
  const roomId = searchParams?.room ? Number(searchParams.room) : undefined;

  const books: RentalRequestCartType[] = await prisma.rentalRequest.findMany({
    where: {
      requesterId: session?.user.id,
      ...(roomId && {
        book: { room: { some: { roomId: roomId } } }
      })
    },
    include: {
      book: {
        select: {
          bookname: true,
          cover: true,
        },
      },
      owner: {
        select: {
          name: true,
        },
      },
    },
  }) as RentalRequestCartType[]
  if (books.length === 0) {
    return (
      <>
        <CenterComponent>
          <div className="flex justify-center flex-col gap-3  items-center">
            <BookOpen className=" opacity-50 scale-200" />
            <p className="opacity-50">You haven&apos;t rented any book</p>

            <Button asChild>
              <Link href={"/home"}>Browse Book</Link>
            </Button>
          </div>
        </CenterComponent>
      </>
    );
  }
  return (
    <>
      <div className="flex justify-center m-auto flex-col items-center gap-4 max-w-7xl   ">
        {books.map((book) => (
          <RentalCart key={book.id} {...book} />
        ))}
      </div>
    </>
  );
  */
 
  // New Route-Level Loading implementation
  // RentedBookList (Async Component) + loading.tsx
  return (
      <RentedBookList searchParams={searchParams} />
  );
}

export default Page;
