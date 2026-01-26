"use client"
import React from 'react'
import { Link } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Button } from '../ui/button'


function MyBookNavigation() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams();
  const roomId = searchParams.get("room");
  const roomParam = roomId ? `?room=${roomId}` : '';


  return (

    <>
      <div className="flex justify-center border items-center mb-4 ">
        <Button onClick={() => router.push(`/my-books/post${roomParam}`)} className={`${pathname === "/my-books/post" ? ("text-green-500") : ("")}`} variant={"link"} > my-book
        </Button>

        <Button onClick={() => router.push(`/my-books/rental-request${roomParam}`)} className={`${pathname === "/my-books/rental-request" ? ("text-green-500") : ("")}`} variant={"link"} > requests
        </Button>
      </div></>
  )
}

export default MyBookNavigation
