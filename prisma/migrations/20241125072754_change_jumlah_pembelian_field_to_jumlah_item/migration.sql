/*
  Warnings:

  - You are about to drop the column `jumlah_pembelian` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `jumlah_item` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "jumlah_pembelian",
ADD COLUMN     "jumlah_item" INTEGER NOT NULL;
