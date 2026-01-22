-- DropForeignKey
ALTER TABLE "public"."RentalRequest" DROP CONSTRAINT "RentalRequest_bookId_fkey";

-- DropForeignKey
ALTER TABLE "public"."RentalRequest" DROP CONSTRAINT "RentalRequest_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "public"."RentalRequest" DROP CONSTRAINT "RentalRequest_requesterId_fkey";

-- DropForeignKey
ALTER TABLE "public"."booksHave" DROP CONSTRAINT "booksHave_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "public"."borrows" DROP CONSTRAINT "borrows_bookId_fkey";

-- DropForeignKey
ALTER TABLE "public"."borrows" DROP CONSTRAINT "borrows_borrowerId_fkey";

-- DropForeignKey
ALTER TABLE "public"."borrows" DROP CONSTRAINT "borrows_ownerId_fkey";

-- AddForeignKey
ALTER TABLE "booksHave" ADD CONSTRAINT "booksHave_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RentalRequest" ADD CONSTRAINT "RentalRequest_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "booksHave"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RentalRequest" ADD CONSTRAINT "RentalRequest_requesterId_fkey" FOREIGN KEY ("requesterId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RentalRequest" ADD CONSTRAINT "RentalRequest_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "borrows" ADD CONSTRAINT "borrows_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "booksHave"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "borrows" ADD CONSTRAINT "borrows_borrowerId_fkey" FOREIGN KEY ("borrowerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "borrows" ADD CONSTRAINT "borrows_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
