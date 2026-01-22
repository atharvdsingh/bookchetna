"use client";
import React from "react";

import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";

interface PaginationWrapperProps {
  totalPages?: number;
  currentPage: number;
  onPageChange?: (page: number) => void;
  disabled?: boolean;
}

function PaginationWrapper(props: PaginationWrapperProps) {
  const {} = props;

  return (
    <>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
             { props.currentPage!=1 &&<PaginationPrevious href={`page=${props.currentPage-1} `} />  }
                
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">{props.currentPage}  </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            {
                (props.totalPages == props.currentPage+1 ) && <PaginationNext  href={`page=${props.currentPage+1}`} />
            }
            
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}

export default PaginationWrapper;
