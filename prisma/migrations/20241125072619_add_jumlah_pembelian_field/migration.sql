/*
  Warnings:

  - Added the required column `jumlah_pembelian` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "jumlah_pembelian" INTEGER NOT NULL;
