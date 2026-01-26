import CenterComponent from "@/components/CenterComponent";
import HomeCard from "@/components/Home/HomeCard";
import NoBooks from "@/components/Home/NoBooks";
import PaginationWrapper from "@/components/PaginationWrapper";
import { prisma } from "@/util/Prisma";
import type { booksHave } from "@prisma/client";
import React from "react";
import Pagination from "./Pagination";
import { GetTheSession } from "@/util/GetTheSession";



async function Page({
  searchParams,
}: {
  searchParams: { page?: number, room?: string }
}) {

  const session = await GetTheSession()



  const Page = Number(searchParams?.page ?? 1)
  const roomNo =
    searchParams?.room && !Number.isNaN(Number(searchParams.room))
      ? Number(searchParams.room)
      : undefined;

  const books: booksHave[] = await prisma.booksHave.findMany({
    where: {

      ownerId: {

        not: session?.user.id
      },
      room: {
        some: {
          roomId: roomNo
        }
      }
    },



    skip: Page * 8 - 8,
    take: 8

  });
  const totalRow = await prisma.booksHave.count({
    where: {

      ownerId: {

        not: session?.user.id
      },
      room: {
        some: {
          roomId: roomNo
        }
      }
    },
  })
  if (books.length == 0) {
    return (
      <CenterComponent>
        <NoBooks />
      </CenterComponent>
    );
  }

  return (
    <>
      <CenterComponent className="flex justify-center items-center" >
        <div className=" grid-cols-1 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 " >
          {books.map((book) => (
            <div key={book.id} >
              <HomeCard {...book} />
            </div>
          ))}
        </div>
      </CenterComponent>
      <Pagination pageNumber={Page} totalPages={Math.ceil(totalRow / 8)} roomId={searchParams?.room} />

    </>
  );
}

export default Page;
