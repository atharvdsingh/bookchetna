import React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";

function CreateRoomCard() {
  return (
    <>
      <Dialog  >
        <form  >
          <DialogTrigger className="w-75  h-40" asChild>
            <Button
              variant="ghost"
              className="hover:bg-black border-gray-700 border hover:border-white hover:border-2 rounded-2xl  "
            >
              <div className="flex flex-col gap-3  justify-center items-center">
                <Plus className=" bg-gray-800 size-15 p-3 text-white rounded-full  " />

                <p className="text-xl">Create New Room</p>
                <p className="text-gray-200">
                  Start new Book sharing community
                </p>
              </div>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create New Room</DialogTitle>
              <DialogDescription>
                Start a new book sharing community. You`&apos;`ll be the room creator.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">Room Name</Label>
                <Input id="name-1" name="name" defaultValue="eg. hostelclub " />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username-1">Discription</Label>
                <Input
                  id="username-1"
                  name="username"
                  defaultValue="eg. book renting for hostels name"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Create Room <Plus/> </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
}

export default CreateRoomCard;
