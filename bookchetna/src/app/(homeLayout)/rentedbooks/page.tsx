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

async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user.id) {
    redirect("/");
  }
  const books: RentalRequestCartType[] = await prisma.rentalRequest.findMany({
    where: {
      requesterId: session?.user.id,
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
  });
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
}

export default Page;
