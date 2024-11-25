import { Prisma } from "@prisma/client";
import db from "../db.js";

const { itemTable, transactionTable } = db();

export default class POSController{
    static async findAll(req, res){
        try {
            const transactions = await transactionTable.findMany();
            res.status(200).json(transactions);
        } catch (error) {
            console.log(error);
            res.status(400).json({message: 'Cannot get transactions'})        
        }
    }

    static async createTransaction(req, res){
        const transactionData = req.body;

        try {
            const item = await itemTable.findUnique({
                where: {
                    id: transactionData.id
                }
            });

            if(!item)
                return res.status(404).json({message: "Item not found"});


            // Check stock
            if(transactionData.jumlah_item > item.stok)
                return res.status(400).json({message: "Pembelian melebihi stok."})

            else{
                const total_harga = transactionData.jumlah_item * item.harga;
                const currentItemStok = item.stok - transactionData.jumlah_item;

                const transactionPayload = {
                    item_id: transactionData.id,
                    jumlah_item: transactionData.jumlah_item,
                    total_harga: total_harga
                }

                // Create new Transaction
                await transactionTable.create({
                    data: transactionPayload
                });

                // Update stok item
                const updated_item = await itemTable.update({
                    where: {
                        id: item.id
                    },
                    data: {
                        stok: currentItemStok
                    }
                });
                
                res.status(200).json({message: "Success Input Transaction.", new_data: updated_item})
            }
        } catch (error) {
            console.log(error);

            if(error instanceof Prisma.PrismaClientValidationError){
                return res.status(400).json({message: 'Invalid Data Provided'})   
            }
        }

    }
}