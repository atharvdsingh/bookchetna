"use client"
import React from 'react'
import { Link } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '../ui/button'


function MyBookNavigation() {
const pathname=usePathname() 
const router=useRouter()
   

    return (
        
          <>
         <div className="flex justify-center border items-center mb-4 ">
        <Button onClick={()=>router.push("/my-books/post")} className={`${pathname==="/my-books/post" ? ("text-green-500"):("")}`}  variant={"link"} > my-book
        </Button>

        <Button onClick={()=>router.push("/my-books/rental-request")} className={`${pathname==="/my-books/rental-request" ? ("text-green-500"):("")}`}  variant={"link"} > requests
        </Button>
      </div></>
    )
}

export default MyBookNavigation
