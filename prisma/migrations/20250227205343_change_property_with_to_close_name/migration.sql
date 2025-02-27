-- CreateEnum
CREATE TYPE "categories" AS ENUM ('REVENUE', 'EXPENSE', 'TRANSFERENCE', 'ASSET');

-- CreateEnum
CREATE TYPE "permissions" AS ENUM ('ADMIN', 'OPERATOR', 'GUEST');

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "accountCategory" "categories" NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Record" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "cameFromId" INTEGER NOT NULL,
    "wentToId" INTEGER NOT NULL,
    "recordCategory" "categories" NOT NULL,
    "date" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "description" TEXT,

    CONSTRAINT "Record_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "permission" "permissions" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_cameFromId_fkey" FOREIGN KEY ("cameFromId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_wentToId_fkey" FOREIGN KEY ("wentToId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
