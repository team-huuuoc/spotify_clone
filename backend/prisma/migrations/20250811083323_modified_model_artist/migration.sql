/*
  Warnings:

  - You are about to drop the column `externalUrl` on the `Album` table. All the data in the column will be lost.
  - You are about to drop the column `images` on the `Album` table. All the data in the column will be lost.
  - You are about to drop the column `releaseDate` on the `Album` table. All the data in the column will be lost.
  - You are about to drop the column `releaseDatePrecision` on the `Album` table. All the data in the column will be lost.
  - You are about to drop the column `totalTracks` on the `Album` table. All the data in the column will be lost.
  - You are about to drop the column `uri` on the `Album` table. All the data in the column will be lost.
  - You are about to drop the column `externalUrl` on the `Artist` table. All the data in the column will be lost.
  - You are about to drop the column `genres` on the `Artist` table. All the data in the column will be lost.
  - You are about to drop the column `totalFollowers` on the `Artist` table. All the data in the column will be lost.
  - You are about to drop the column `artistId` on the `Track` table. All the data in the column will be lost.
  - You are about to drop the column `availableMarkets` on the `Track` table. All the data in the column will be lost.
  - You are about to drop the column `durationMs` on the `Track` table. All the data in the column will be lost.
  - You are about to drop the column `explicit` on the `Track` table. All the data in the column will be lost.
  - You are about to drop the column `externalUrl` on the `Track` table. All the data in the column will be lost.
  - You are about to drop the column `previewUrl` on the `Track` table. All the data in the column will be lost.
  - You are about to drop the column `trackNumber` on the `Track` table. All the data in the column will be lost.
  - You are about to drop the column `uri` on the `Track` table. All the data in the column will be lost.
  - Added the required column `zip_allowed` to the `Album` table without a default value. This is not possible if the table is not empty.
  - Added the required column `audiodownload_allowed` to the `Track` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `Track` table without a default value. This is not possible if the table is not empty.
  - Added the required column `position` to the `Track` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Track" DROP CONSTRAINT "Track_artistId_fkey";

-- AlterTable
ALTER TABLE "Album" DROP COLUMN "externalUrl",
DROP COLUMN "images",
DROP COLUMN "releaseDate",
DROP COLUMN "releaseDatePrecision",
DROP COLUMN "totalTracks",
DROP COLUMN "uri",
ADD COLUMN     "image" TEXT,
ADD COLUMN     "releasedate" TIMESTAMP(3),
ADD COLUMN     "zip" TEXT,
ADD COLUMN     "zip_allowed" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Artist" DROP COLUMN "externalUrl",
DROP COLUMN "genres",
DROP COLUMN "totalFollowers",
ADD COLUMN     "joindate" TIMESTAMP(3),
ADD COLUMN     "website" TEXT,
ALTER COLUMN "image" DROP NOT NULL,
ALTER COLUMN "image" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Track" DROP COLUMN "artistId",
DROP COLUMN "availableMarkets",
DROP COLUMN "durationMs",
DROP COLUMN "explicit",
DROP COLUMN "externalUrl",
DROP COLUMN "previewUrl",
DROP COLUMN "trackNumber",
DROP COLUMN "uri",
ADD COLUMN     "audio" TEXT,
ADD COLUMN     "audiodownload" TEXT,
ADD COLUMN     "audiodownload_allowed" BOOLEAN NOT NULL,
ADD COLUMN     "duration" INTEGER NOT NULL,
ADD COLUMN     "license_ccurl" TEXT,
ADD COLUMN     "position" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Playlist" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "creationdate" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "zip" TEXT,
    "shortUrl" TEXT,
    "shareUrl" TEXT,

    CONSTRAINT "Playlist_pkey" PRIMARY KEY ("id")
);
