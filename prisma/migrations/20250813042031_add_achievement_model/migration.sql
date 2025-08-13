-- CreateEnum
CREATE TYPE "public"."Difficulty" AS ENUM ('EASY', 'MEDIUM', 'HARD');

-- CreateTable
CREATE TABLE "public"."Achievement" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "difficulty" "public"."Difficulty" NOT NULL,
    "points" INTEGER NOT NULL,
    "gameId" INTEGER NOT NULL,

    CONSTRAINT "Achievement_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Achievement" ADD CONSTRAINT "Achievement_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "public"."Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
