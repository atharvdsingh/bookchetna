"use client"
import React, { useEffect, useState } from 'react'
import AllPublicRoomCard from './AllPublicRoomCard'
import type { roomTypeForCardWithName } from '@/app/room/public-room/page'
import { fetchPublicRooms } from '@/actions/fetchAvailableRoomDetails'
import { useInView } from 'react-intersection-observer'
import AllPublicRoomCardSkeleton from './SkeletonAllPublicRoomCard'
interface Props {
    rooms:roomTypeForCardWithName[]
}
const NUMBER_OF_USERS_TO_FETCH=5

 function PublickRoomWrapper(props: Props) {
    const [rooms,setRoom]=useState<roomTypeForCardWithName[]> (props.rooms)
    const [loading,setLoadig]=useState<boolean>(false)
    const [offset,setOffset]=useState<number>(8)
    const {ref,inView}=useInView()
    const loadMOreData=async()=>{
        setLoadig(true)

       const sleep = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));
       await sleep(1000)

        
        const newrooms=await fetchPublicRooms(offset,NUMBER_OF_USERS_TO_FETCH)
            setRoom(rooms=>[...rooms,...newrooms])
            setOffset(offset=>offset+NUMBER_OF_USERS_TO_FETCH)
            setLoadig(false)
    }
    useEffect(()=>{

        if(inView && !loading ){


            
            loadMOreData()
            
        }
    },[inView])

    return (
        <>
        <div className="flex gap-3 mt-20 mx-4 flex-col ">
            {rooms.map((room) => (
              <AllPublicRoomCard key={room.id} room={room} />
            ))}
          </div  >
          <div className='flex gap-3 mt-3 mx-4 flex-col' >

          {
              loading && Array.from({length:5}).map((_,key)=>(
                  <AllPublicRoomCardSkeleton key={key} />
                ))
            }
            </div>
          <div ref={ref} ></div>
        </>
    )
}

export default PublickRoomWrapper
