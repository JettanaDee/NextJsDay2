'use server'

import { PrismaClient } from "../../generated/prisma"
const prisma = new PrismaClient();

export async function create(fromData: FormData) {
    const name = fromData.get('name') as string;
    const price = fromData.get('price') as string;

    await prisma.product.create({
        data: {
            name: name,
            price: parseFloat(price)
        }
    })
}