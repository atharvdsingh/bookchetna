import React from "react";
import BookListSkeleton from "@/components/Home/BookListSkeleton";
import CenterComponent from "@/components/CenterComponent";

/**
 * Loading
 * 
 * Route-level loading state for /home.
 * Shows the full page skeleton while the route segment is loading.
 */
export default function Loading() {
  return (
    <CenterComponent>
       <BookListSkeleton />
    </CenterComponent>
  );
}
