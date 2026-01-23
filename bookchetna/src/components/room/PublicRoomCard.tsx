"use client"


import { Button } from "@/components/ui/button"
import {
  Dialog,

  DialogTrigger,
} from "@/components/ui/dialog"

import { FolderSymlink, Plus } from 'lucide-react'

import { useRouter } from 'next/navigation'



function PublicRoomCard() {

    const router=useRouter()

    

    return (
        <>
         <Dialog>
      <form>
        <DialogTrigger  onClick={()=>router.push("./room/public-room")} className='w-75 h-40' asChild>
          <Button variant="ghost" className='hover:bg-black border-gray-700 border hover:border-white hover:border-2 rounded-2xl  ' >

            <div className='flex flex-col gap-3  justify-center items-center' >
                

                <FolderSymlink className=' bg-gray-800 size-15 p-3 text-white rounded-full  ' />
              
                <p className='text-xl' >Join with public rooms</p>
                <p className='text-gray-200' > </p>
                
            </div>
          </Button>
        </DialogTrigger>

      </form>
    </Dialog>
        </>
    )
}

export default PublicRoomCard
