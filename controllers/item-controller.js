import { Prisma } from "@prisma/client";
import db from "../db.js";

const { itemTable } = db();

export default class ItemController{
    
    static async createItem(req, res){
        const itemData = req.body;
        try {
            await itemTable.create({
                data: itemData
            })
            res.status(200).json({message: 'Success Creating Item'})
        } catch (error) {
            console.log(error);
            if(error instanceof Prisma.PrismaClientValidationError){
                return res.status(400).json({message: 'Invalid Data Provided'})   
            }

            if(error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002'){
                return res.status(403).json({message: `Duplicated field ${error.meta.modelName}. ${error.meta.target[0]} already exsist`})   
            }

            return res.status(400).json({message: 'Cannot Create Items'})   
        }
    }

    static async showItems(req, res){
        try {
           const items =  await itemTable.findMany();
           res.status(200).json(items)
        } catch (error) {
            console.log(error);
            res.status(400).json({message: 'Cannot Show Items'})
        }
    }

    static async getItem(req, res){
        const id = req.params.id;

        try {
            const item = await itemTable.findUnique({
                where: {
                    id: +id
                }
            })

            if(!item)
                return res.status(404).json({message: 'Item not exsist'})

            return res.status(200).json(item)
        } catch (error) {
            console.log(error);
            res.status(400).json({message: `Cannot get Item with id: ${id}`})
        }
    }

    static async updateItem(req, res){
        const id = req.params.id;
        const updatedData = req.body;

        // Delete id field if exsist, id cannot be inserted
        updatedData.id ? delete updatedData.id : '';

        try {
            const item = await itemTable.findUnique({
                where: {
                    id: +id
                }
            })

            if(!item)
                return res.status(404).json({message: 'Item not exsist'})

            
            
            const new_item = await itemTable.update({
                where: {
                    id: +id
                },
                data: updatedData
            })
            res.status(200).json({message: 'Success update data', new_item})
        } catch (error) {
            console.log(error);
            if (error.code === 'P2025') {
                res.status(400).json({message: `Record not found for the provided condition.`})
            } 
            res.status(400).json({message: `Cannot get Item with id: ${id}`})
        }
    }

    static async deleteItem(req, res){
        const id = req.params.id;

        try {
            const item = await itemTable.findUnique({
                where: {
                    id: +id
                }
            })

            if(!item)
                return res.status(404).json({message: 'Item not exsist'})
            
            await itemTable.delete({
                where: {
                    id: +id
                }
            })
            res.status(200).json({message: 'Delete Item Success'})
        } catch (error) {
            console.log(error);
            res.status(400).json({message: `Cannot get Item with id: ${id}`})
        }
    }
}