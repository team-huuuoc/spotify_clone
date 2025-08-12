/*
  Warnings:

  - You are about to drop the column `zip` on the `Album` table. All the data in the column will be lost.
  - You are about to drop the column `zip_allowed` on the `Album` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Album` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Album" DROP COLUMN "zip",
DROP COLUMN "zip_allowed",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
