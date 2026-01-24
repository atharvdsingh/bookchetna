import CenterComponent from "@/components/CenterComponent";
import AllPublicRoomCardSkeleton from "@/components/room/publicRoom/SkeletonAllPublicRoomCard";
import React from "react";

function Loading() {
  return (
    <>
      <CenterComponent className="">
        <div className="max-w-7xl m-auto">
          <div className="flex gap-3 mt-20 mx-4 flex-col ">{
            
            Array.from({length:10}).map((_,key)=>(
                <AllPublicRoomCardSkeleton key={key} />
            ))
            
            }</div>
        </div>
      </CenterComponent>
    </>
  );
}

export default Loading;
