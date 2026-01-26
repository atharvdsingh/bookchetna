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
  roomId?: string | null;
  onPageChange?: (page: number) => void;
  disabled?: boolean;
}

function PaginationWrapper(props: PaginationWrapperProps) {
  const roomParam = props.roomId ? `&room=${props.roomId}` : '';

  return (
    <>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            {props.currentPage != 1 && <PaginationPrevious href={`?page=${props.currentPage - 1}${roomParam}`} />}

          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={`?page=${props.currentPage}${roomParam}`}>{props.currentPage}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            {
              props.currentPage < (props.totalPages || 1) && <PaginationNext href={`?page=${props.currentPage + 1}${roomParam}`} />
            }

          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}

export default PaginationWrapper;
