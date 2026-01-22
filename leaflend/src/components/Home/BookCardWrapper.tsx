"use client";

import type { booksHave } from "@prisma/client";
import React, { useEffect } from "react";
import MyBooksCard from "./MybooksCard";
import { useDispatch, useSelector } from "react-redux";
import { setMyAllBooks } from "@/store/features/mybookSlice";
import type { SerializableBook } from "@/types/bookstypeforRedux";

interface Props {
  books: booksHave[];
}

function BookCardWrapper({ books = [] }: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    const dispatcherBooks: SerializableBook[] = books.map(book => ({
      ...book,
      publishDate: book.publishDate.toString(),
    }));

    dispatch(setMyAllBooks(dispatcherBooks));
  }, [books, dispatch]);

  return (
    <>
        {/* <MyBooksCard  /> */}
    </>
  );
}

export default BookCardWrapper;
