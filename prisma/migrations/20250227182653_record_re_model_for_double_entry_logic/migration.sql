/*
  Warnings:

  - You are about to drop the column `accountId` on the `Record` table. All the data in the column will be lost.
  - Added the required column `cameFromId` to the `Record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wentToId` to the `Record` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Record" DROP CONSTRAINT "Record_accountId_fkey";

-- AlterTable
ALTER TABLE "Record" DROP COLUMN "accountId",
ADD COLUMN     "cameFromId" INTEGER NOT NULL,
ADD COLUMN     "wentToId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_cameFromId_fkey" FOREIGN KEY ("cameFromId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_wentToId_fkey" FOREIGN KEY ("wentToId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
