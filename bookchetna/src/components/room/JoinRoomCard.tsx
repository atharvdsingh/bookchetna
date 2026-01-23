import React from 'react'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FolderSymlink, Plus } from 'lucide-react'



function JoinRoomCard() {
    

    return (
        <>
         <Dialog>
      <form>
        <DialogTrigger className='w-75 h-40' asChild>
          <Button variant="ghost" className='hover:bg-black border-gray-700 border hover:border-white hover:border-2 rounded-2xl  ' >

            <div className='flex flex-col gap-3  justify-center items-center' >
                

                <FolderSymlink className=' bg-gray-800 size-15 p-3 text-white rounded-full  ' />
              
                <p className='text-xl' >Join with Code</p>
                <p className='text-gray-200' >Enter an invite code </p>
                
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Join Room</DialogTitle>
            <DialogDescription>
              Enter an invite code to join a room
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Invite Code</Label>
              <Input id="name-1" name="name" type="number" defaultValue="Enter 6-digit code" />
            </div>
            {/* <div className="grid gap-3">
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </div> */}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Join</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
        </>
    )
}

export default JoinRoomCard
