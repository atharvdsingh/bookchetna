import CenterComponent from "@/components/CenterComponent";
import HomeCard from "@/components/Home/HomeCard";
import NoBooks from "@/components/Home/NoBooks";
import PaginationWrapper from "@/components/PaginationWrapper";
import { prisma } from "@/util/Prisma";
import type { booksHave } from "@prisma/client";
import React from "react";
import Pagination from "./Pagination";
import { GetTheSession } from "@/util/GetTheSession";

async function Page({ searchParams }:{searchParams: Promise< {page:string,room:string}>}) {
  const session = await GetTheSession();
  
  console.log(await searchParams,"search params")
  const Page=Number((await searchParams).page)
  const roomId=Number((await searchParams).room
)


  

  const books: booksHave[] = await prisma.booksHave.findMany({
    where: {
      ownerId: {
        not: session?.user.id,
      },
      room: {
        some: {
          roomId: roomId,
        },
      },
    },

    skip: Number((await searchParams).room) * 8 - 8,
    take: 8,
  });
  const totalRow = await prisma.booksHave.count({
    where: {
      ownerId: {
        not: session?.user.id,
      },
      room: {
        some: {
          roomId: Number((await searchParams).room),
        },
      },
    },
  });
  if (books.length == 0) {
    return (
      <CenterComponent>
        <NoBooks />
      </CenterComponent>
    );
  }

  return (
    <>
      <CenterComponent className="flex justify-center items-center">
        <div className=" grid-cols-1 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ">
          {books.map((book) => (
            <div key={book.id}>
              <HomeCard {...book} />
            </div>
          ))}
        </div>
      </CenterComponent>
      <Pagination
        pageNumber={Page}
        totalPages={Math.ceil(totalRow / 8)}
        roomId={roomId.toString()}
      />
    </>
  );
}

export default Page;
