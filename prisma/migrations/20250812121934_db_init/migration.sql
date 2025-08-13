-- CreateTable
CREATE TABLE "public"."Game" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "genre" TEXT NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);
