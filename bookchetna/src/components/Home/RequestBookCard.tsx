import React from 'react'
import { Card } from '../ui/card'
import type { RequestedBooksForApprovel } from '@/types/databaseRoutesType'
import { Button } from '../ui/button'
import RequestBookCardCancelAndAcceptedButton from './RequestBookCardCancelAndAcceptedButton'
import Image from 'next/image'


function RequestBookCard(props: RequestedBooksForApprovel) {
    const {} = props

    return (
        <>
        <Card className="flex flex-col w-full gap-6 p-4 rounded-[6px] ">
        <div className="flex items-center space-x-2 gap-4">
          <Image
            src={"/1.jpg"}
            className="shrink-0 w-20 h-20 overflow-hidden "
            alt={props.book.cover || ""}
            width={20}
            height={28}
          />

          <div className="flex-1 min-w-0">
            <p className="line-clamp-1  "> book name -  {props.book.bookname}</p>
            <p className="text-sm text-white-600">
              {/* this is for author */}
              Requester - 
              {props.requester.name}
            </p>
            <div>
           <p className={`${props.status=="PENDING" ? ("text-red-600"):("text-green-600")} `} >{props.status}</p>
          </div>

          </div>
          <div className='flex justify-center items-center' >
            {props.status=="PENDING" &&    <RequestBookCardCancelAndAcceptedButton id={props.id} />
 }
          </div>
        </div>
      </Card>
        </>
    )
}

export default RequestBookCard
