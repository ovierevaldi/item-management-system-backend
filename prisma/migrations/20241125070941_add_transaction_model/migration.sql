-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "item_id" INTEGER NOT NULL,
    "total_harga" INTEGER NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);
