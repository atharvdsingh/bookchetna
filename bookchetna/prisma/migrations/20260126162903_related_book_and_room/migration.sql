-- CreateTable
CREATE TABLE "roomAndBook" (
    "id" SERIAL NOT NULL,
    "bookId" INTEGER NOT NULL,
    "roomId" INTEGER NOT NULL,

    CONSTRAINT "roomAndBook_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "roomAndBook_bookId_roomId_key" ON "roomAndBook"("bookId", "roomId");

-- AddForeignKey
ALTER TABLE "roomAndBook" ADD CONSTRAINT "roomAndBook_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "booksHave"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roomAndBook" ADD CONSTRAINT "roomAndBook_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
