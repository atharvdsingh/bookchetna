import Image from "next/image";
import React from "react";
import { Card } from "../ui/card";
import type { RentalRequest } from "@prisma/client";
import type { RentalRequestCartType } from "@/types/databaseRoutesType";

// model RentalRequest {
//   id Int @id @default(autoincrement())
//   bookId Int
//   book   booksHave @relation(fields: [bookId], references: [id])
//   requesterId Int
//   requester   users @relation("Requester", fields: [requesterId], references: [id])
//   ownerId Int
//   owner   users @relation("Owner", fields: [ownerId], references: [id])
//   status         rentalRequestEnum @default(PENDING)
//   requestMessage String?
//   createdAt DateTime @default(now())
//   @@unique([bookId,requesterId])
// }

function RentalCart(props: RentalRequestCartType) {
  const {} = props;
  console.log(props)

  return (
    <>
      <Card className="flex flex-col w-full gap-6 p-4 rounded-[6px] ">
        <div className="flex items-center space-x-2 gap-4">
          <Image
            src={props.book.cover!}
            className="shrink-0 w-20 h-20 overflow-hidden "
            alt={props.book.cover}
            width={20}
            height={28}
          />

          <div className="flex-1 min-w-0">
            <p className="line-clamp-1  "> book name -  {props.book.bookname}</p>
            <p className="text-sm text-white-600">
              {/* this is for author */}
              Owner - 
              {props.owner.name}
            </p>

          </div>
          <div>
           <p className={`${props.status=="PENDING" ? ("text-red-600"):("text-green-600")} `} >{props.status}</p>
          </div>
        </div>
      </Card>
    </>
  );
}

export default RentalCart;
