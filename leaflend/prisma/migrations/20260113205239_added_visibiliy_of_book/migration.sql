-- CreateEnum
CREATE TYPE "visibilityStatusEnum" AS ENUM ('HIDE', 'SHOW');

-- AlterTable
ALTER TABLE "booksHave" ADD COLUMN     "price" INTEGER,
ADD COLUMN     "visibilityStatus" "visibilityStatusEnum" NOT NULL DEFAULT 'SHOW',
ALTER COLUMN "author" DROP NOT NULL,
ALTER COLUMN "author" DROP DEFAULT;
