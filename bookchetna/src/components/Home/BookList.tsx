import React from "react";
import { prisma } from "@/util/Prisma";
import { GetTheSession } from "@/util/GetTheSession";
import { handleClientError } from "@/util/clientError";
import HomeCard from "@/components/Home/HomeCard";
import NoBooks from "@/components/Home/NoBooks";
import CenterComponent from "@/components/CenterComponent";

import type { booksHave } from "@prisma/client";

/**
 * BookList (Server Component)
 * 
 * Handles fetching the list of books based on search parameters.
 * Moved from page.tsx to granularly stream this content using Suspense.
 */
async function BookList({ searchParams }: { searchParams: Promise<{ page: string; room: string }> }) {
  const session = await GetTheSession();
  const resolvedParams = await searchParams;
  const roomId = Number(resolvedParams.room);

  // Artificial delay to demonstrate Suspense (can be removed in production)
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  let books: booksHave[] = [];
  try {
    books = await prisma.booksHave.findMany({
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
      skip: Number(resolvedParams.room) * 8 - 8, // NOTE: Logic copied from page.tsx, assuming 'room' param was meant to be used for skip or there is a logic specific to the user code.
      take: 8,                                   // In original code: skip: Number((await searchParams).room) * 8 - 8
    });                                          
  } catch (error) {
    console.error("Error fetching books:", error);
    // On server, we can't show toast. 
    // We could return null or empty list, or let error boundary handle it.
    // For now, empty list is safe.
  }

  if (books.length === 0) {
    return (
      <CenterComponent>
        <NoBooks />
      </CenterComponent>
    );
  }

  return (
    <CenterComponent className="flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {books.map((book) => (
          <div key={book.id}>
            <HomeCard {...book} />
          </div>
        ))}
      </div>
    </CenterComponent>
  );
}

export default BookList;
