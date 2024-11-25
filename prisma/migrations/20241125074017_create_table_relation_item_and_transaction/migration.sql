-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
