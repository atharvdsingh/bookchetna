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
  params,
}: {
  params: Promise<{ page: string }>
}) {  

  const session=await GetTheSession()
  

  const {page}=await params

  const PageNumber:number= Number(page.replace("page%3D",""))
    const books: booksHave[] = await prisma.booksHave.findMany({
      where:{
        ownerId:{
          not: session?.user.id
        }
      },
      
      
      skip:PageNumber*8-8,
      take:8
      
    });
    const totalRow=await prisma.booksHave.count()
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
            {books.map((book)=>(
              <div key={book.id} >
                <HomeCard {...book}   />
              </div>
            ))}
          </div>
        </CenterComponent>
        <Pagination pageNumber={PageNumber} totalPages={Math.ceil(totalRow/8)} />

    </>
  );
}

export default Page;
