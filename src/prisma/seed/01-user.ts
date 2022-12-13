import { Prisma, PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

export const users: Prisma.UserCreateInput[] = [
    {
        nickname: 'carlos-xbm',
        name: 'Carlos Eduardo Carvalho',
        password: 'Abcd@123',
        cpf: '12345678910',
        image: 'http://www.pizzafresh.com/imagem-usuario',
    },
];

export const user = async (prisma: PrismaClient) => {
    for (const obj of Object.values(users)) {
        await prisma.user.upsert({
            where: { nickname: obj.nickname },
            update: {},
            create: {
                ...obj,
                password: await bcrypt.hash(obj.password, 10),
            },
        });
    }
};
