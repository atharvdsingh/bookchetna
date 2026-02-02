import React from "react";
import RentedBookSkeleton from "@/components/Rental/RentedBookSkeleton";

/**
 * Loading
 * 
 * Route-level loading state for /rentedbooks.
 */
export default function Loading() {
  return (
    <RentedBookSkeleton />
  );
}
