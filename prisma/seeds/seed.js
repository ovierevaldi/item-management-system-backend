import { PrismaClient } from "@prisma/client";


export default class Seed{
    constructor(table_name){
        this.prisma = new PrismaClient();
        this.tableName = table_name;
    }

    async init(){
        try {
            await this.createSeed();
            await this.prisma.$disconnect();
        } catch (error) {
           throw error 
        }
    }

    async createSeed(){

    }

    async disconnectErrorPrisma(err){
        console.log(`Error on Creating ${this.tableName} seed Table`);
        console.log(err)
        await this.prisma.$disconnect();
    }
}