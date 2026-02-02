import React from "react";
import PublicRoomSkeleton from "@/components/room/publicRoom/PublicRoomSkeleton";
import CenterComponent from "@/components/CenterComponent";

/**
 * Loading
 * 
 * Route-level loading state for /room/public-room.
 */
export default function Loading() {
  return (
    <CenterComponent>
      <PublicRoomSkeleton />
    </CenterComponent>
  );
}
