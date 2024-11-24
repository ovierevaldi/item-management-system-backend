import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const items = [
    { nama: "Apple", harga: 5000, stok: 100, kategori: "food", url_gambar: "https://via.placeholder.com/150" },
    { nama: "Banana", harga: 3000, stok: 200, kategori: "food", url_gambar: "https://via.placeholder.com/150" },
    { nama: "Orange Juice", harga: 15000, stok: 50, kategori: "drink", url_gambar: "https://via.placeholder.com/150" },
    { nama: "Milk", harga: 12000, stok: 80, kategori: "drink", url_gambar: "https://via.placeholder.com/150" },
    { nama: "Bread", harga: 7000, stok: 60, kategori: "food", url_gambar: "https://via.placeholder.com/150" },
    { nama: "Soda", harga: 9000, stok: 70, kategori: "drink", url_gambar: "https://via.placeholder.com/150" },
    { nama: "Coffee", harga: 15000, stok: 40, kategori: "drink", url_gambar: "https://via.placeholder.com/150" },
    { nama: "Eggs", harga: 22000, stok: 30, kategori: "food", url_gambar: "https://via.placeholder.com/150" },
    { nama: "Cheese", harga: 25000, stok: 20, kategori: "food", url_gambar: "https://via.placeholder.com/150" },
    { nama: "Water Bottle", harga: 5000, stok: 300, kategori: "drink", url_gambar: "https://via.placeholder.com/150" },
];

const itemSeed = {
    createSeed : async () => {
        try {
            const item = await prisma.item.findMany();

            // Create seed when there's no item
            if(item.length <= 0){
                await prisma.item.createMany({
                    data: items
                })
            }

        } catch (error) {
            throw error
        }
    },
    disconnectErrorPrisma: async () =>{
        console.log("Error on Creating Item seed Table");
        await prisma.$disconnect();
    },

    init: async () => {
        try {
            await itemSeed.createSeed();
            prisma.$disconnect();
        } catch (error) {
            throw (error)
        }
    }
};

export default itemSeed;