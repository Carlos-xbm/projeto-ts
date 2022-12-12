import { Prisma, PrismaClient } from '@prisma/client';

export const products: Prisma.ProductCreateInput[] = [
    {
        name: 'Pizza de Mussarela',
        description: 'Mussarela com borda recheada',
        price: 45.0,
        image: 'http://www.pizzafresh.com/imagem-usuario',
    },
    {
        name: 'Pizza de Queijo',
        description: 'Queijo com borda recheada',
        price: 47.0,
        image: 'http://www.pizzafresh.com/imagem-usuario',
    },
    {
        name: 'Pizza de Presunto',
        description: 'Presunto com borda recheada',
        price: 49.0,
        image: 'http://www.pizzafresh.com/imagem-usuario',
    },
];

export const product = async (prisma: PrismaClient) => {
    for (const obj of Object.values(products)) {
        await prisma.product.upsert({
            where: { name: obj.name },
            update: {},
            create: {
                ...obj,
            },
        });
    }
};
