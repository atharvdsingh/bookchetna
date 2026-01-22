import CenterComponent from "@/components/CenterComponent";
import BookCardWrapper from "@/components/Home/BookCardWrapper";
import RequestBookCard from "@/components/Home/RequestBookCard";
import type { RequestedBooksForApprovel } from "@/types/databaseRoutesType";
import { GetTheSession } from "@/util/GetTheSession";
import { prisma } from "@/util/Prisma";
import { MessageCircleOff } from "lucide-react";
import { redirect } from "next/navigation";

async function Page() {
  const session = await GetTheSession();
  if (!session?.user.id) {
    redirect("/");
  }
  const books: RequestedBooksForApprovel[] =
    await prisma.rentalRequest.findMany({
      where: {
        ownerId: session.user.id,
      },
      include: {
        book: {
          select: {
            bookname: true,
            cover: true,
          },
        },
        requester: {
          select: {
            name: true,
          },
        },
      },
    });

  if (books.length === 0) {
    return (
      <CenterComponent>
        <div className="flex justify-center flex-col gap-3  items-center">
          <MessageCircleOff className=" opacity-50 scale-200" />
          <p className="opacity-50">no request for rentals</p>
        </div>
      </CenterComponent>
    );
  }

  return (
    <>
      <CenterComponent>
        {books.map((book) => (
          <div key={book.id}>
            <RequestBookCard {...book} />
          </div>
        ))}
      </CenterComponent>
    </>
  );
}

export default Page;
