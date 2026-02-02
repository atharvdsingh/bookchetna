import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

/**
 * Root Loading State
 * 
 * Becomes the full-page loader for the landing page (and other root pages)
 * since we removed granular Suspense. Matches content of FirstPage.tsx.
 */
export default function Loading() {
  return (
    <div className="flex flex-wrap min-h-screen max-w-7xl mx-auto justify-evenly items-center p-4 sm:px-20 py-10">
      
      {/* LEFT SECTION SKELETON */}
      <div className="flex flex-col gap-5 items-start justify-center w-full md:w-1/2">
         {/* Badge Skeleton */}
         <Skeleton className="h-8 w-48 rounded-full bg-zinc-800" />
         
         {/* Title Skeleton */}
         <div className="space-y-2 mt-4">
            <Skeleton className="h-12 w-64 bg-zinc-800" />
            <Skeleton className="h-12 w-64 bg-zinc-800" />
            <Skeleton className="h-12 w-48 bg-zinc-800" />
         </div>

         {/* Description Skeleton */}
         <Skeleton className="h-24 w-full max-w-[500px] mt-4 bg-zinc-800" />
         
         {/* Auth Buttons Skeleton */}
         <div className="flex gap-5 mt-4">
             <Skeleton className="h-10 w-[180px] bg-zinc-800" />
         </div>
      </div>

      {/* RIGHT SECTION (IMAGE) SKELETON */}
      <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-[500px] flex justify-center items-center mt-8 md:mt-0">
          <Skeleton className="w-full h-[400px] md:h-[500px] rounded-[85px] bg-zinc-800" />
      </div>
    </div>
  );
}